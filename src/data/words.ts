interface Word {
	word: string;
	hintDb: [string, string, string, string, string];
}

const words: Word[] = [
	{
		word: 'hint',
		hintDb: [
			'I can be subtle or obvious.',
			'I am a helpful tool for learning or discovery.',
			"'He couldn't catch the ____.'",
			'I am a discreet cue that can help point someone in the right direction.',
			'A word game is named after me.'
		]
	},
	{
		word: 'sloth',
		hintDb: [
			"'You act like a ____.'",
			'I am a type of animal.',
			'I live in the trees of a rainforest.',
			'I spent most of my time sleeping and resting.',
			'I am known for being slow and lazy.'
		]
	},
	{
		word: 'ocean',
		hintDb: [
			'I am a source of inspiration for artists and writers.',
			'I can be dangerous and unpredictable.',
			'I have different layers and depths.',
			"I am essential to earth's ecosystem.",
			"I cover most of the Earth's surface."
		]
	},
	{
		word: 'pizza',
		hintDb: [
			'I can be customized to individual preferences.',
			'I have become a staple in many countries.',
			'I come in different shapes and sizes.',
			'I originated in Italy.',
			'I am a popular food choice for many people.'
		]
	}
];

export default words;
