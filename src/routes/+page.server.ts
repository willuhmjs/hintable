import { error } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export const load = async () => {
    const oldest = 0;
	const newest = dayjs(Date.now()).utc().startOf('day').toDate().getTime();
	const d = newest - oldest;
	if (isNaN(d) || d < 0) {
		error(400, 'Dates must be numbers, and oldest must be less than newest');
	}
    
	if (newest > Date.now()) {
		error(400, 'Newest date cannot be in the future');
	}

	const oldestDate = new Date(oldest);
	const newestDate = new Date(newest);

	const game = await prisma.game.findFirst({
		where: {
			day: {
				gte: oldestDate,
				lte: newestDate
			}
		},
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
          game,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    if (!game) {
         return error(404, "Game not found");
    }
    return {
          game
    };
};
