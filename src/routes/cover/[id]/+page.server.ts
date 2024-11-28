import { prisma } from '$lib/server/prisma/prismaConnection';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }: { params: { id: string } }) => {
    const id = parseInt(params.id);
    if (isNaN(id) && params.id !== "hintable") {
        throw error(400, "Invalid ID");
    }

    if (params.id === "hintable") {
        return { game:  "hintable" };
    }

    const game = await prisma.game.findFirst({
        where: {
            id,
            day: {
                lte: new Date(Date.now() + 24 * 60 * 60 * 1000)
            }
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