export interface Word {
	word: string;
	hintDb: string[5];
	difficulty: 'easy' | 'medium' | 'hard' | 'expert';
}
