interface Word {
	word: string;
	hintDb: [string, string, string, string, string];
	difficulty: 'easy' | 'medium' | 'hard' | 'expert';
}

const words: Word[] = [
	{
		word: 'basketball',
		hintDb: [
			'I originated in the United States.',
			'I am orange with black stripes.',
			'I am typically made of rubber or synthetic materials.',
			'I am a bouncy ball used in a popular sport.',
			'I am often bounced, dribbled, and passed between players.'
		],
		difficulty: 'medium'
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
		difficulty: 'expert'
	},
	{
		word: 'aesthetic',
		hintDb: [
			'I can be used to describe a variety of things, like a room, a piece of clothing, or a website.',
			'I am often used in discussions about taste, style, and culture.',
			'I come from a greek word meaning "perception" or "sensation".',
			'I am often associated with art, design, and beauty.',
			'I am a word used to describe something visually pleasing or appealing.'
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
		difficulty: 'hard'
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
			'I am the lack of emotion or interest.'
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
		difficulty: 'medium'
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
			'I am used to slow the descent of a person or object.'
		],
		difficulty: 'easy'
	},
	{
		word: 'telescope',
		hintDb: [
			'I am named after a Greek word meaning "far-seeing".',
			'I am an optical instrument.',
			'I can be used to observe distant objects.',
			'I can be used for terrestrial and astronomical observations.',
			'I am used for studying the sky and other objects in space.'
		],
		difficulty: 'easy'
	},
	{
		word: 'escalator',
		hintDb: [
			'I come from the Latin word for steps.',
			'I am a mechanical device.',
			'I am found in many public places, including airports and malls.',
			'I move people from one level to another.',
			'I am a moving staircase.'
		],
		difficulty: 'hard'
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
		difficulty: 'expert'
	},
	{
		word: 'enigma',
		hintDb: [
			'Solving me requires a combination of logic and intuition.',
			'I am sometimes associated with mystery and secrecy.',
			'My origin can be traced back to the Greek word "ainissesthai", meaning "to speak in riddles".',
			'The inner workings of my mind are an _________.',
			'I am something mysterious, puzzling, or difficult to understand.'
		],
		difficulty: 'hard'
	},
	{
		word: 'paradox',
		hintDb: [
			'I am often used to illustrate a deeper truth or idea.',
			'My name comes from a Greek word meaning "contrary to expectation".',
			'I can be found in literature, science, philosophy, and mathematics.',
			'We are stuck in a _________.',
			'I am a statement that seems contradictory but may be true.'
		],
		difficulty: 'hard'
	},
	{
		word: 'satire',
		hintDb: [
			'I am often used for bringing attention to societal problems or issues.',
			'I can be used to make social or political commentary.',
			'I am a type of writing of speech.',
			'I use humor, irony, or exaggeration to criticize people or institutions.',
			'Example: A Modest Proposal by Jonathan Swift.'
		],
		difficulty: 'medium'
	},
	{
		word: 'hypothesis',
		hintDb: [
			'I can be proven or disproven.',
			'I am often written as an if-then statement.',
			'I am an important part of the scientific method.',
			'I am often tested through experimentation.',
			'I am a tentative explanation for an observation or phenomenon.'
		],
		difficulty: 'medium'
	},
	{
		word: 'dystopia',
		hintDb: [
			'I am often portrayed in literature and film.',
			'I am often characterized by a lack of freedom and a high level of control.',
			'I am a type of society.',
			'I am often associated with a totalitarian government.',
			'I am a society characterized by human misery, oppression, and poverty.'
		],
		difficulty: 'medium'
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
		difficulty: 'hard'
	},
	{
		word: 'mellifluous',
		hintDb: [
			'My roots come from the Latin words mel, meaning "honey," and fluere, meaning "to flow."',
			'My antonyms are harsh, grating, and unpleasant.',
			'My synonyms are harmonious, melodious, and tuneful.',
			'I am often used to describe sounds, especially voices or music.',
			'I am an adjective meaning pleasant or musical to the ear.'
		],
		difficulty: 'expert'
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
	},
	{
		word: 'quartz',
		hintDb: [
			'I can be transparent, translucent, or opaque.',
			'I am composed of silicon and oxygen atoms.',
			'I can be used in jewelry, clocks, watches, and electronics.',
			'I am a common mineral found in many rocks.',
			'I have a hexagonal crystal structure and a hardness of 7 on the Mohs scale.'
		],
		difficulty: 'hard'
	},
	{
		word: 'jazz',
		hintDb: [
			'I originated in the late 19th and early 20th centuries.',
			'I have many subgenres, such as bebop, cool, fusion, and smooth.',
			'I am characterized by complex rhythms, syncopation, swing, and improvisation.',
			'I have influenced many other forms of music, such as rock, pop, and hip hop.',
			'I have produced many famous musicians, such as Louis Armstrong, Duke Ellington, Miles Davis, and John Coltrane.'
		],
		difficulty: 'medium'
	},
	{
		word: 'cryptocurrency',
		hintDb: [
			'I operate independently of a central authority or intermediary.',
			'I use cryptography to secure and verify transactions and to control the creation of new units.',
			'I can be exchanged for goods, services, or other currencies on online platforms.',
			'I am a digital or virtual form of money.',
			'I have many examples, such as Bitcoin, Ethereum, and Dogecoin.'
		],
		difficulty: 'hard'
	},
	{
		word: 'yoga',
		hintDb: [
			'I am often associated with a word that means "union" or "connection".',
			'I can promote health, wellness, and relaxation.',
			'I am a physical, mental, and spiritual practice that originated in India.',
			'I involve various postures, breathing techniques, and meditation.',
			'I have many types, such as hatha, vinyasa, bikram, and ashtanga.'
		],
		difficulty: 'easy'
	},
	{
		word: 'origami',
		hintDb: [
			'I am an ancient Japanese art form.',
			'I am a traditional craft that fosters patience and creativity.',
			'I require precision and attention to detail.',
			'I create sculptures without cutting or gluing.',
			'I involve folding paper into intricate designs.'
		],
		difficulty: 'medium'
	},
	{
		word: 'zebra',
		hintDb: [
			'I can be found in Africa.',
			'I can be a prey for lions, hyenas, or crocodiles.',
			'I can be related to horses and donkeys.',
			'I can have black and white stripes.',
			'I am a type of animal that belongs to the genus Equus.'
		],
		difficulty: 'easy'
	},
	{
		word: 'onomatopoeia',
		hintDb: [
			'I can be used to create vivid and expressive language.',
			'I can be found in poetry, comics, or literature.',
			'I can imitate or suggest a sound.',
			'I can be words like bang, splash, or meow.',
			'I am a word that sounds like what it means.'
		],
		difficulty: 'expert'
	},
	{
		word: 'chameleon',
		hintDb: [
			'I am capable of blending into my surroundings.',
			'I am known for changing colors.',
			'I use my unique features for survival in diverse environments.',
			'I have independently moving eyes.',
			'I am a reptile with a prehensile tail.'
		],
		difficulty: 'medium'
	},
	{
		word: 'sushi',
		hintDb: [
			'I originated in Japan.',
			'I can be eaten with chopsticks, fingers, or utensils.',
			'I can have different ingredients, such as fish, rice, seaweed, or vegetables.',
			'I can be served with soy sauce, wasabi, and ginger.',
			'I am a type of food that is often wrapped in nori.'
		],
		difficulty: 'easy'
	},
	{
		word: 'gravity',
		hintDb: [
			'I can be affected by mass and distance.',
			'I can be described by a famous equation',
			'I am a force that attracts two objects with mass.',
			'I can be be different on different planets or celestial bodies.',
			'I keep you from floating away from the earth.'
		],
		difficulty: 'hard'
	},
	{
		word: 'origami',
		hintDb: [
			'I am a traditional craft that fosters patience and creativity.',
			'I require precision and attention to detail.',
			'I am an ancient Japanese art form.',
			'I create sculptures without cutting or gluing.',
			'I involve folding paper into intricate designs.'
		],
		difficulty: 'medium'
	},
	{
		word: 'moon',
		hintDb: [
			'I have many phases.',
			'I am a satellite.',
			'I am visible at night.',
			'I control the ocean tides.',
			'I am the only celestial body humans have visited.'
		],
		difficulty: 'easy'
	},
	{
		word: 'constellation',
		hintDb: [
			'I have been named after mythological figures and animals.',
			'I am used for navigation and storytelling.',
			'My patterns are often recognized in the night sky.',
			'I am a group of stars forming a pattern.',
			'I am a celestial arrangement visible from Earth.'
		],
		difficulty: 'medium'
	},
	{
		word: 'resilience',
		hintDb: [
			'I am an important concept in psychology, ecology, and engineering.',
			'I am considered a positive trait in individuals, organizations, and systems.',
			'I can be symbolized as a tree able to withstand storms.',
			'My name is derived from the Latin word "resilio," meaning "to spring back."',
			'I am the ability to recover and adapt in the face of challenges or adversity.'
		],
		difficulty: 'hard'
	},
	{
		word: 'ephemeral',
		hintDb: [
			'I am often used to describe something short-lived or fleeting.',
			'I can be associated with the transient nature of life.',
			'My name is derived from a Greek word meaning "lasting only a day."',
			'I am used to express the brevity of certain experiences or phenomena.',
			'A beautiful sunset is an example of something that can be described as ____.'
		],
		difficulty: 'expert'
	},
	{
		word: 'quarantine',
		hintDb: [
			'I can be imposed by authorities or self-imposed.',
			'I can last for a specific period of time, usually 14 days.',
			'I can involve isolation, social distancing, and testing.',
			'I can be a measure to prevent or limit the spread of something.',
			'I separate and restrict the movement of people who may have been exposed to a contagious illness.'
		],
		difficulty: 'medium'
	},
	{
		word: 'chocolate',
		hintDb: [
			'I am usually brown in color.',
			'I am a type of food.',
			'I am a sweet and delicious treat.',
			'I come from the seeds of a tropical tree.',
			'I can be used to make cakes, cookies, and candies.'
		],
		difficulty: 'easy'
	},
	{
		word: 'pyramid',
		hintDb: [
			'I come from an ancient civilization.',
			'I have a triangular shape.',
			'I can be found in Egypt, Mexico, and Tennessee.',
			'I am a type of structure.',
			'I am a monumental tomb for pharaohs or kings.'
		],
		difficulty: 'easy'
	},
	{
        word: 'towel',
        hintDb: [
            'I am both smooth and rough.',
            'My absence can ruin your morning or evening.',
            'I am held in your hand or wrapped around your body.',
            'I absorb water effortlessly.',
            'I am found by the pool or by the bath.'
        ],
        difficulty: 'easy'
    },
	{
		word: 'algorithm',
		hintDb: [
			'I am used in computer science.',
			'I am a set of instructions.',
			'I am designed to perform a specific task.',
			'I can be simple like a recipe or complex like a machine learning model.',
			'I am the backbone of any non-trivial computer application.'
		],
		difficulty: 'hard'
	},
	{
		word: 'keyboard',
		hintDb: [
			'I am used every day.',
			'I am an essential part of a computer.',
			'I have letters and numbers on me.',
			'I am used for typing.',
			'You press my buttons.'
		],
		difficulty: 'easy'
	},
	{
		word: 'metropolis',
		hintDb: [
			'I am a place where many people live.',
			'I am larger than a town or city.',
			'I am often bustling with activity.',
			'I am a hub for culture, business, and transportation.',
			'New York, Tokyo, and London are examples of me.'
		],
		difficulty: 'medium'
	},
	{
		word: 'equator',
		hintDb: [
			'I am an imaginary line.',
			'I divide the earth into two equal parts.',
			'I am the hottest part of the earth.',
			'I am 0 degrees latitude.',
			'I run horizontally around the middle of the Earth.'
		],
		difficulty: 'easy'
	},
	{
		word: 'photosynthesis',
		hintDb: [
			'I involve the sun.',
			'I am a process used by plants.',
			'I convert light energy into chemical energy.',
			'I produce oxygen.',
			'I am the reason why plants are green.'
		],
		difficulty: 'hard'
	},
	{
		word: 'sphinx',
		hintDb: [
			'I am a mythical creature.',
			'I have the body of a lion.',
			'I have the head of a human.',
			'I am associated with ancient Egypt.',
			'I am a famous statue near the Pyramids of Giza.'
		],
		difficulty: 'hard'
	},
	{
		word: 'volcano',
		hintDb: [
			'I can be found on Earth and other planets.',
			'I am a natural feature.',
			'I can erupt.',
			'I spew out lava and ash.',
			'Mount Vesuvius and Mount St. Helens are examples of me.'
		],
		difficulty: 'medium'
	},
];

export default words;
