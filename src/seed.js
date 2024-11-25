import { Difficulty, PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

const getPastDate = (fromToday) => {
  return new Date(Date.now() - (86400000*fromToday));
}

const words = [{
    "word": "hint",
    "hintDb": [
      "I can be subtle or obvious.",
      "I am a helpful tool for learning or discovery.",
      "'He couldn't catch the ____.'",
      "I am a discreet cue that can help point someone in the right direction.",
      "A word game is named after me."
    ],
    "difficulty": Difficulty.easy,
    "day": getPastDate(10)
  },
  {
    "word": "website",
    "hintDb": [
      "I am accessed via the internet.",
      "I consist of multiple pages and can include text, images, and videos.",
      "I can serve various purposes, like providing information, selling products, or offering services.",
      "I am hosted on a server and can be visited using a web browser.",
      "Examples include social media platforms, news sites, and online stores."
    ],
    "difficulty": Difficulty.easy,
    "day": getPastDate(9)
  },
  {
    "word": "basketball",
    "hintDb": [
      "I originated in the United States.",
      "I am orange with black stripes.",
      "I am typically made of rubber or synthetic materials.",
      "I am a bouncy ball used in a popular sport.",
      "I am often bounced, dribbled, and passed between players."
    ],
    "difficulty": Difficulty.medium,
    "day": getPastDate(8)
  },
  {
    "word": "alacrity",
    "hintDb": [
      "I can be contagious and inspire others.",
      "I can help overcome obstacles and achieve goals.",
      "I am often seen as a positive trait or attribute.",
      "I can be associated with enthusiasm and eagerness.",
      "I am a quick and cheerful willingness to do something."
    ],
    "difficulty": Difficulty.expert,
    "day": getPastDate(7)
  },
  {
    "word": "aesthetic",
    "hintDb": [
      "I can be used to describe a variety of things, like a room, a piece of clothing, or a website.",
      "I am often used in discussions about taste, style, and culture.",
      "I come from a greek word meaning \"perception\" or \"sensation\".",
      "I am often associated with art, design, and beauty.",
      "I am a word used to describe something visually pleasing or appealing."
    ],
    "difficulty": Difficulty.medium,
    "day": getPastDate(6)
  },
  {
    "word": "pandemic",
    "hintDb": [
      "I am widespread and affect many people.",
      "I cause panic and fear worldwide.",
      "I can be deadly and have a high mortality rate.",
      "I can be caused by a virus, bacteria, or other microorganism.",
      "I am a global outbreak of a disease."
    ],
    "difficulty": Difficulty.hard,
    "day": getPastDate(5)
  },
  {
    "word": "pizza",
    "hintDb": [
      "I can be customized to individual preferences.",
      "I have become a staple in many countries.",
      "I come in different shapes and sizes.",
      "I originated in Italy.",
      "I am a popular food choice for many people."
    ],
    "difficulty": Difficulty.easy,
    "day": getPastDate(4)
  },
  {
    "word": "apathy",
    "hintDb": [
      "I can be harmful to a person or society.",
      "I can be a response to dissatisfaction or a lack of interest.",
      "I am often associated with a feeling of detachment or indifference.",
      "I can be overcome with effort and empathy.",
      "I am the lack of emotion or interest."
    ],
    "difficulty": Difficulty.medium,
    "day": getPastDate(3)
  },
  {
    "word": "guitar",
    "hintDb": [
      "I am a popular device for professionals and hobbyists.",
      "I can be electric and come in many shapes in sizes.",
      "I have been used in many different styles of music.",
      "I am often used to accompany singing or as a solo instrument.",
      "I am a musical instrument that is played by strumming or plucking strings."
    ],
    "difficulty": Difficulty.medium,
    "day": getPastDate(2)
  },
  {
    "word": "ocean",
    "hintDb": [
      "I am a source of inspiration for artists and writers.",
      "I can be dangerous and unpredictable.",
      "I have different layers and depths.",
      "I am essential to earth's ecosystem.",
      "I cover most of the Earth's surface."
    ],
    "difficulty": Difficulty.easy,
    "day": getPastDate(1)
  },
  {
    "word": "sloth",
    "hintDb": [
      "\"You act like a ____.\"",
      "I am a type of animal.",
      "I live in the trees of a rainforest.",
      "I spent most of my time sleeping and resting.",
      "I am known for being slow and lazy."
    ],
    "difficulty": Difficulty.easy,
    "day": getPastDate(0)
  }];

  await prisma.game.createMany({
    data: words
  })

  