import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
export const load = async ({ params }) => {
   console.log(params.id);
   const game = await prisma.game.findFirst({
     where: {
         id: Number(params.id)
     },
     select: {
          word: true,
          day: true,
          difficulty: true,
          hintDb: true
     }
});
    if (!game) {
         return error(404, "Game not found");
    }
    return {
          game
    };
};
