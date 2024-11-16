import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { prisma } from '$lib/server/prisma/prismaConnection';

export const GET: RequestHandler = async ({ url }) => {
	const oldest = Number(url.searchParams.get('oldest') ?? 0);
	const newest = Number(url.searchParams.get('newest') ?? Date.now());

	const d = newest - oldest;
	if (isNaN(d) || d < 0) {
		error(400, 'Dates must be numbers, and oldest must be less than newest');
	}

	if (newest > Date.now()) {
		error(400, 'Newest date cannot be in the future');
	}

	const oldestDate = new Date(oldest);
	const newestDate = new Date(newest);

	const wordsInRange = await prisma.game.findMany({
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

	

	return new Response(JSON.stringify(wordsInRange), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};