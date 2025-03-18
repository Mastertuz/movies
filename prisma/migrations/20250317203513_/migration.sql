/*
  Warnings:

  - You are about to drop the column `releaseDate` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_userId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "releaseDate",
DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";
