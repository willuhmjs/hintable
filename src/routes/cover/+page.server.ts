import { prisma } from '$lib/server/prisma/prismaConnection';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const game = await prisma.game.findFirst({
        where: {
            day: {
                lte: new Date(Date.now() + 24 * 60 * 60 * 1000),
            }
        },
        orderBy: {
            day: 'desc'
        },
        select: {
            day: true,
            difficulty: true,
            id: true
        }
    });
    if (!game) throw error(400, "Invalid ID");
	return { game }
};