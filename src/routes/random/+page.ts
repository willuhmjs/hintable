import words from '../../data/words';

/** @type {import('./$types').PageLoad} */
// return random from array
export function load() {
	return words[Math.floor(Math.random() * words.length)];
}
