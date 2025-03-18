/*
  Warnings:

  - Made the column `adult` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `backdrop_path` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_air_date` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `original_language` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `original_name` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `original_title` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `overview` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `popularity` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `poster_path` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `release_date` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `video` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vote_count` on table `Movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "adult" SET NOT NULL,
ALTER COLUMN "backdrop_path" SET NOT NULL,
ALTER COLUMN "first_air_date" SET NOT NULL,
ALTER COLUMN "original_language" SET NOT NULL,
ALTER COLUMN "original_name" SET NOT NULL,
ALTER COLUMN "original_title" SET NOT NULL,
ALTER COLUMN "overview" SET NOT NULL,
ALTER COLUMN "popularity" SET NOT NULL,
ALTER COLUMN "poster_path" SET NOT NULL,
ALTER COLUMN "release_date" SET NOT NULL,
ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "video" SET NOT NULL,
ALTER COLUMN "vote_count" SET NOT NULL;
