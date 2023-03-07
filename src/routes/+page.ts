import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        word: 'hint',
        hintDb: [
          "I start with the letter 'h'.",
          'I am four letters long.',
          "'Why won't you just give me a ______?!'",
          'I am a discreet cue that can help point someone in the right direction.',
          'I am in the name of this website.'
        ]
    };
 
  throw error(404, 'Not found');
}