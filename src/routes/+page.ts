import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		word: 'hint',
		hintDb: [
			"I start with the letter 'h'.",
			'I am four letters long.',
			"'He got a ______, but he still lost the word game.'",
			'I am a discreet cue that can help point someone in the right direction.',
			'I am in the name of this website.'
		]
	};

	throw error(404, 'Not found');
};
