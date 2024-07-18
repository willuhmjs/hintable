import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

export interface Word {
	word: string;
	hintDb: string[];
	difficulty: 'easy' | 'medium' | 'hard' | 'expert';
	day: number;
}

export interface GameStat {
	word: string;
	hintsLeft: number;
	usedLifeline?: boolean;
}

/*
we are using writable stores because
its less annoying than passing it through a parent component
*/
export const ended = writable(false);
export const won = writable(false);
export const gameStats = persisted<GameStat[]>('gameStats', []);
export const usedLifeline = writable(false);
export const theme = persisted('theme', 'light');
