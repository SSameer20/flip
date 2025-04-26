/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `Player1Id` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `Player2Id` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `WinnerId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `History` on the `User` table. All the data in the column will be lost.
  - Added the required column `UpdatedAt` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdatedAt` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "Player1Id",
DROP COLUMN "Player2Id",
DROP COLUMN "WinnerId",
ADD COLUMN     "Status" TEXT,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "UserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "History";

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
