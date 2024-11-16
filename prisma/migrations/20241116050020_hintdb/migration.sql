/*
  Warnings:

  - You are about to drop the column `hints` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "hints",
ADD COLUMN     "hintDb" TEXT[];
