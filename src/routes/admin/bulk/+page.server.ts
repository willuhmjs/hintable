import { prisma } from '$lib/server/prisma/prismaConnection';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { Actions } from './$types';
dayjs.extend(utc);

export const load = async () => {
	const items = await prisma.game.findMany();
    return { items };
};



export const actions = {
	manual: async ({ request }) => {
        const data = await request.formData();
        const games: Game[] = JSON.parse(data.get('words') as string) ?? error(400, "Invalid form data");
        processSubmission(games);
        
    }
} satisfies Actions;



import type { Game } from '@prisma/client';
import { error } from '@sveltejs/kit';

const processSubmission = async (games: Game[]): Promise<void> => {
    if (!games) return error(400, "Invalid form data");
    const latest = await prisma.game.findFirst({
        orderBy: {
            id: 'desc'
        }
    })
    let gid = latest?.id ?? 0;
    // add word to list of words
    try {
        
    await prisma.game.createMany({
        
        data: games.map((game) => {
            gid++;
            return {
                id: gid,
                word: game.word.trim().toLowerCase().toWellFormed(),
                hintDb: game.hintDb,
                difficulty: game.difficulty,
                day: new Date(game.day)
            }
        }),
        skipDuplicates: true,

    });
} catch (e) {
    console.error(e);
    return error(400, "Invalid form data");
}
}
