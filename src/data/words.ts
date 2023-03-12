interface Word {
	word: string;
	hintDb: [string, string, string, string, string];
	difficulty: 'easy' | 'medium' | 'hard';
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
		],
		difficulty: 'easy'
	},
	{
		word: 'sloth',
		hintDb: [
			'"You act like a ____."',
			'I am a type of animal.',
			'I live in the trees of a rainforest.',
			'I spent most of my time sleeping and resting.',
			'I am known for being slow and lazy.'
		],
		difficulty: 'easy'
	},
	{
		word: 'ocean',
		hintDb: [
			'I am a source of inspiration for artists and writers.',
			'I can be dangerous and unpredictable.',
			'I have different layers and depths.',
			"I am essential to earth's ecosystem.",
			"I cover most of the Earth's surface."
		],
		difficulty: 'medium'
	},
	{
		word: 'pizza',
		hintDb: [
			'I can be customized to individual preferences.',
			'I have become a staple in many countries.',
			'I come in different shapes and sizes.',
			'I originated in Italy.',
			'I am a popular food choice for many people.'
		],
		difficulty: 'easy'
	},
	{
		word: 'basketball',
		hintDb: [
			'I originated in the United States.',
			'I have orange and black stripes.',
			'I am typically made of rubber or synthetic materials.',
			'I am am a bouncy ball used in a popular sport.',
			'I am often bounced, dribbled, and passed between players.'
		],
		difficulty: 'easy'
	},
	{
		word: 'guitar',
		hintDb: [
			'I am a popular device for professionals and hobbyists.',
			'I can be electric and come in many shapes in sizes.',
			'I have been used in many different styles of music.',
			'I am often used to accompany singing or as a solo instrument.',
			'I am a musical instrument that is played by strumming or plucking strings.'
		],
		difficulty: 'easy'
	},
	{
		word: 'aesthetic',
		hintDb: [
			'I can be used to describe a variety of things, like a room, a piece of clothing, or a website.',
			'I am often used in discussions about taste, style, and culture.',
			'I come from a greek word meaning "perception" or "sensation".',
			'I am often associated with art, design, and beauty.',
			'I am a word used to describe something that is visually pleasing or appealing.'
		],
		difficulty: 'medium'
	},
	{
		word: 'marathon',
		hintDb: [
			'I am named after a famous battle in greek history.',
			'I am held in many cities around the world, including Boston, New York, and London.',
			'I have a rich history and cultural significance, dating back to the Olympic games in 1896.',
			'I am 26.2 miles long.',
			'I am a long-distance race that tests endurance.'
		],
		difficulty: 'medium'
	},
	{
		word: 'parachute',
		hintDb: [
			'I was first used in the 18th century by a French inventor.',
			'I can be opened manually or automatically, depending on the design.',
			'I am made of fabric and cords that create drag and provide stability.',
			'I am essential to the safety of skydivers, pilots, and astronauts.',
			'I am used to slown the descent of a person or object.'
		],
		difficulty: 'easy'
	},
	{
		word: 'apathy',
		hintDb: [
			'I can be harmful to a person or society.',
			'I can be a response to dissatisfaction or a lack of interest.',
			'I am often associated with a feeling of detachment or indifference.',
			'I can be overcome with effort and empathy.',
			'I am the lack of emotion or interest'
		],
		difficulty: 'medium'
	},
	{
		word: 'pandemic',
		hintDb: [
			'I am widespread and affect many people.',
			'I cause panic and fear worldwide.',
			'I can be deadly and have a high mortality rate.',
			'I can be caused by a virus, bacteria, or other microorganism.',
			'I am a global outbreak of a disease.',
		],
		difficulty: 'easy'
	},
	{
		word: 'alacrity',
		hintDb: [
			'I can be contagious and inspire others.',
			'I can help overcome obstacles and achieve goals.',
			'I am often seen as a positive trait or attribute.',
			'I can be associated with enthusiasm and eagerness.',
			'I am a quick and cheerful willingness to do something.'
		],
		difficulty: 'hard'
	}
];

export default words;
