import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export const load = async ({ params }) => {
   console.log(params.id);
   const game = await prisma.game.findFirst({
     where: {
         id: Number(params.id),
         day: {
          gte: new Date(0),
          lte: dayjs(Date.now()).utc().startOf('day').toDate()
          }
     },
     select: {
          word: true,
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
