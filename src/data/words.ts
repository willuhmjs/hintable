interface Word {
	word: string;
	hintDb: [string, string, string, string, string];
	difficulty: 'easy' | 'medium' | 'hard';
}

const words: Word[] = [
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
		word: 'alacrity',
		hintDb: [
			'I can be contagious and inspire others.',
			'I can help overcome obstacles and achieve goals.',
			'I am often seen as a positive trait or attribute.',
			'I can be associated with enthusiasm and eagerness.',
			'I am a quick and cheerful willingness to do something.'
		],
		difficulty: 'hard'
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
		word: 'pandemic',
		hintDb: [
			'I am widespread and affect many people.',
			'I cause panic and fear worldwide.',
			'I can be deadly and have a high mortality rate.',
			'I can be caused by a virus, bacteria, or other microorganism.',
			'I am a global outbreak of a disease.'
		],
		difficulty: 'easy'
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
		word: 'telescope',
		hintDb: [
			'I am named after a Greek word meaning "far-seeing".',
			'I am an optical instrument',
			'I can be used to observe distant objects.',
			'I can be used for terrestial and astronomical observations.',
			'I am used to study the sky and other objects in space.'
		],
		difficulty: 'easy'
	},
	{
		word: 'escalator',
		hintDb: [
			'I come from the Latin word for steps.',
			'I am a mechanical device.',
			'I am found in many public places, including airports and malls.',
			'I move people from one level to another',
			'I am a moving staircase.'
		],
		difficulty: 'easy'
	},
	{
		word: 'schadenfreude',
		hintDb: [
			'I can be felt unconsciously or consciously.',
			'I can be seen as a negative or immoral emotion.',
			'I am a complex emotion involving empathy, envy, and pleasure.',
			'My origins are traced back to German language and culture.',
			'I am a German word that means "harm-joy".'
		],
		difficulty: 'hard'
	},
	{
		word: 'enigma',
		hintDb: [
			'Solving me requires a combination of logic and intuition.',
			'I am sometimes associated with mystery and secrecy.',
			'My origin can be traced back to the Greek word "ainissesthai", meaning "to speak in riddles".',
			'The inner workings of my mind are an _________.',
			'I am something mysterious, puzzling or difficult to understand.'
		],
		difficulty: 'medium'
	},
	{
		word: 'paradox',
		hintDb: [
			'I am often used to illustrate a deeper truth or idea.',
			'My name comes from a greek word meaning "contrary to expectation".',
			'I can be found in literature, science, philosophy, and mathematics.',
			'We are stuck in a _________.',
			'I am a statement that seems contradictory but may be true.'
		],
		difficulty: 'medium'
	},
	{
		word: 'satire',
		hintDb: [
			'I am often used to bring attention to societal problems or issues.',
			'I can be used to make social or political commentary.',
			'I am a type of writing of speech',
			'I use humor, irony, or exaggeration to criticize people or institutions.',
			'Example: A Modest Proposal by Jonathan Swift.'
		],
		difficulty: 'easy'
	},
	{
		word: 'hypothesis',
		hintDb: [
			'I can be proven or disproven.',
			'I am often written as an if-then statement.',
			'I am an important part of the scientific method',
			'I am often tested through experimentation',
			'I am a tenative explanation for an observation or phenomenon.'
		],
		difficulty: 'easy'
	},
	{
		word: 'dystopia',
		hintDb: [
			'I am a type of society.',
			'I am often portrayed in literature and film.',
			'I am often characterized by a lack of freedom and a high level of control.',
			'I am often associated with a totalitarian government.',
			'I am a society characterized by human misery, oppression, and poverty.'
		],
		difficulty: 'easy'
	},
	{
		word: 'ethos',
		hintDb: [
			'I can be used in various forms of communication, including speeches, advertisements, and essays.',
			'I am often associated with ethical or moral values.',
			'I am a Greek word that means "character".',
			'I am a rhetorical appeal that focues on the character of the speaker or writer.',
			"I am one of the three modes of persuasion in Aristotle's Rhetoric."
		],
		difficulty: 'medium'
	},
	{
		word: 'mellifluous',
		hintDb: [
			'My roots come from the Latin words mel, meaning "honey," and fluere, meaning "to flow."',
			'My antonyms are harsh, grating, and unpleasant.',
			'My synonyms are harmonious, melodious, and tuneful.',
			'I am often used to describe sounds, especially voices or music.',
			'I am an adjective meaning pleasent or musical to the ear'
		],
		difficulty: 'hard'
	},
	{
		word: 'dolphin',
		hintDb: [
			'I am known for my intelligence and ability to learn.',
			'I am friendly and playful and known to interact with humans in the wild.',
			'Many people believe I am a fish, but I am actually a mammal.',
			'I use clicks, whistles, and body language to communicate.',
			'I am a cetacean found in oceans around the world.'
		],
		difficulty: 'easy'
	}
];

export default words;
