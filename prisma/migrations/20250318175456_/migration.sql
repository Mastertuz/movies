/*
  Warnings:

  - Added the required column `backdrop_path` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `media_type` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_language` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `popularity` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_average` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_count` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "backdrop_path" TEXT NOT NULL,
ADD COLUMN     "first_air_date" TEXT,
ADD COLUMN     "genre_ids" INTEGER[],
ADD COLUMN     "media_type" TEXT NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "original_language" TEXT NOT NULL,
ADD COLUMN     "original_name" TEXT,
ADD COLUMN     "original_title" TEXT,
ADD COLUMN     "overview" TEXT NOT NULL,
ADD COLUMN     "popularity" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "poster_path" TEXT,
ADD COLUMN     "release_date" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "video" BOOLEAN,
ADD COLUMN     "vote_average" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vote_count" INTEGER NOT NULL;
