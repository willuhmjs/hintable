import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

export interface Word {
	word: string;
	hintDb: [string, string, string, string, string];
	difficulty: 'easy' | 'medium' | 'hard' | 'expert';
}

export interface GameStat {
	word: string;
	hintsLeft: number;
}

/*
we are using writable stores because
its less annoying than passing it through a parent component
*/
export const ended = writable(false);
export const won = writable(false);
export const gameStats = persisted<GameStat[]>('gameStats', []);
export const theme = persisted('theme', 'light');