/*
  Warnings:

  - You are about to drop the column `backdrop_path` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `first_air_date` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `genre_ids` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `media_type` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `original_language` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `original_name` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `original_title` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `overview` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `popularity` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `poster_path` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `release_date` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `video` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `vote_average` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `vote_count` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "backdrop_path",
DROP COLUMN "first_air_date",
DROP COLUMN "genre_ids",
DROP COLUMN "media_type",
DROP COLUMN "name",
DROP COLUMN "original_language",
DROP COLUMN "original_name",
DROP COLUMN "original_title",
DROP COLUMN "overview",
DROP COLUMN "popularity",
DROP COLUMN "poster_path",
DROP COLUMN "release_date",
DROP COLUMN "type",
DROP COLUMN "video",
DROP COLUMN "vote_average",
DROP COLUMN "vote_count";
