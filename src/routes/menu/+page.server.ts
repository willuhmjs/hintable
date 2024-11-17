import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
export const load = async () => {
   const game = await prisma.game.findMany({
     select: {
          word: true,
          day: true,
          difficulty: true,
          hintDb: true
     },
        orderBy: {
            day: 'desc'
        }
});
    if (!game) {
         return error(404, "Game not found");
    }
    return {
          game
    };
};
