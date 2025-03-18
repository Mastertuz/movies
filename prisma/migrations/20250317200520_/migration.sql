/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `overview` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `posterPath` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the `Watchlist` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tmdb_id]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tmdb_id` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Watchlist" DROP CONSTRAINT "Watchlist_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Watchlist" DROP CONSTRAINT "Watchlist_userId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_pkey",
DROP COLUMN "overview",
DROP COLUMN "posterPath",
ADD COLUMN     "tmdb_id" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Movie_id_seq";

-- DropTable
DROP TABLE "Watchlist";

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdb_id_key" ON "Movie"("tmdb_id");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
