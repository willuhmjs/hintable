import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export const load = async () => {
   const game = await prisma.game.findMany({
     select: {
          word: true,
          difficulty: true,
          hintDb: true
     },
     take: 1,
     skip: Math.floor(Math.random() * await prisma.game.count()),
     orderBy: {
         day: 'desc',
     },
     where: {
          day: {
               gte: new Date(0),
               lte: dayjs(Date.now()).utc().startOf('day').toDate()
          }
     },
});
    if (!game) {
         return error(404, "Game not found");
    }
    return {
          game: game[0]
    };
};
