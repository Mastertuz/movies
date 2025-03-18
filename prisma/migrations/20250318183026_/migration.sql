/*
  Warnings:

  - Added the required column `media_type` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_average` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "adult" BOOLEAN,
ADD COLUMN     "backdrop_path" TEXT,
ADD COLUMN     "first_air_date" TEXT,
ADD COLUMN     "genre_ids" INTEGER[],
ADD COLUMN     "media_type" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "original_language" TEXT,
ADD COLUMN     "original_name" TEXT,
ADD COLUMN     "original_title" TEXT,
ADD COLUMN     "overview" TEXT,
ADD COLUMN     "popularity" DOUBLE PRECISION,
ADD COLUMN     "poster_path" TEXT,
ADD COLUMN     "release_date" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "video" BOOLEAN,
ADD COLUMN     "vote_average" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vote_count" INTEGER;
