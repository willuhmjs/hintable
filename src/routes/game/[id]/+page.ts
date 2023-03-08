import words from '../../../data/words';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!parseInt(params.id) || !words[parseInt(params.id) - 1]) return words[words.length - 1];
	return words[parseInt(params.id) - 1];
}
