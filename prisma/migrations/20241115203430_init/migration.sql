-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('easy', 'medium', 'hard');

-- CreateTable
CREATE TABLE "Game" (
    "word" TEXT NOT NULL,
    "hints" TEXT[],
    "difficulty" "Difficulty" NOT NULL,
    "day" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_word_key" ON "Game"("word");

-- CreateIndex
CREATE UNIQUE INDEX "Game_day_key" ON "Game"("day");
