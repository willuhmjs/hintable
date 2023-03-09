export interface Word {
    word: string;
    hintDb: [string, string, string, string, string];
    difficulty: 'easy' | 'medium' | 'hard';
}