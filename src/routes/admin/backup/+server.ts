import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection';

export const GET: RequestHandler = async ({ request }) => {
    try {
        const games = await prisma.game.findMany({
            select: {
                word: true,
                difficulty: true,
                hintDb: true,
                day: true
            },
            orderBy: {
                day: 'desc'
            }
        });
        return new Response(JSON.stringify(games), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch games' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};