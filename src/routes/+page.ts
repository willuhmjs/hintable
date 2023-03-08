import words from '../data/words';

/** @type {import('./$types').PageLoad} */
// return random from array
export function load() {
	return words[words.length - 1];
}
