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
        const formData: FormData = {
            word: data.get('word') as string,
            hint1: data.get('hint1') as string,
            hint2: data.get('hint2') as string,
            hint3: data.get('hint3') as string,
            hint4: data.get('hint4') as string,
            hint5: data.get('hint5') as string,
            difficulty: data.get('difficulty') as string,
        };
        processSubmission(formData);
        
    }
} satisfies Actions;



interface FormData {
    word: string;
    hint1: string;
    hint2: string;
    hint3: string;
    hint4: string;
    hint5: string;
    difficulty: string;
}

import type { Difficulty, Game } from '@prisma/client';

const processSubmission = async (data: FormData): Promise<void> => {
    const latestWord = await prisma.game.findFirst({
        orderBy: {
            day: 'desc'
        }
    });

    const game: Game = {
        word: data.word.trim().toLowerCase().toWellFormed(),
        hintDb: [
            data.hint1,
            data.hint2,
            data.hint3,
            data.hint4,
            data.hint5
        ],
        difficulty: data.difficulty as Difficulty,
        day: dayjs(latestWord?.day || Date.now()).utc().startOf('day').add(1, 'day').toDate()
    }
    
    // add word to list of words
    await prisma.game.create({
        data: game,
    });
}
