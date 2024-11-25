import { Difficulty, PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
const word = {
    "word": "hint",
    "hintDb": [
      "I can be subtle or obvious.",
      "I am a helpful tool for learning or discovery.",
      "'He couldn't catch the ____.'",
      "I am a discreet cue that can help point someone in the right direction.",
      "A word game is named after me."
    ],
    "difficulty": Difficulty.easy,
    "day": new Date(Date.now()- 86400000)
  };

  await prisma.game.upsert({
    where: { word: word.word },
    create: word,
    update: {}
  })

  