import { redirect, type RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';


export const GET: RequestHandler = async ({ request, cookies }) => {
    const user = cookies.get("session");

	if (!user) {
		throw redirect(303, '/login');
	}

    try {
        const t = jwt.verify(user, JWT_SECRET);
        if (t.username !== "admin") {
            throw redirect(303, '/login');
        }
    } catch {
        throw redirect(303, '/login');
    }

    try {
        const games = await prisma.game.findMany({
            select: {
                word: true,
                difficulty: true,
                hintDb: true,
                day: true,
                id: true
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