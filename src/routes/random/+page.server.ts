import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export const load = async () => {
    const count = await prisma.game.count({
        where: {
            day: {
                gte: new Date(0),
                lte: dayjs(Date.now()).utc().startOf('day').toDate()
            }
        }
    });

    console.log(count);
    const randomIndex = Math.floor(Math.random() * count) + 1;

    const game = await prisma.game.findFirst({
        select: {
            word: true,
            difficulty: true,
            hintDb: true,
            id: true
        },
        where: {
            id: randomIndex,
            day: {
                gte: new Date(0),
                lte: dayjs(Date.now()).utc().startOf('day').toDate()
            }
        }
    });

    if (!game) {
        return error(404, "Game not found");
    }

    return {
        game
    };
};
