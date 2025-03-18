'use server'
import { revalidatePath } from 'next/cache';
import { Details } from '../../typings';
import { getDbUserId } from './user.action';
import { prisma } from '@/lib/db';

export async function addToWatchlist(clerkUserId: string, movieDetails: Details, type: string) {
  try {
    // Find or create the user in the database
    const userId = await getDbUserId(clerkUserId);
    if (!userId) return;

    // Create the movie entry
    const movie = await prisma.movie.create({
      data: {
        title: movieDetails.title||'',
        user_id: userId,
        tmdb_id: movieDetails.id.toString(),
        media_type:type,
        poster_path: movieDetails.poster_path,
        adult: movieDetails.adult || false,
        backdrop_path: movieDetails.backdrop_path || '',
        genre_ids: movieDetails.genres.map((genre) => genre.id),
        release_date: movieDetails.release_date || movieDetails.first_air_date,
        vote_average: movieDetails.vote_average,
        name: movieDetails.name||'',
        original_language: movieDetails?.original_language,
        original_title: movieDetails?.original_title || movieDetails.title ||'',
        original_name: movieDetails.name || '',
        overview: movieDetails.overview,
        popularity: movieDetails.popularity,
        video: movieDetails.video || false,
        vote_count: movieDetails.vote_count,
        first_air_date: movieDetails.first_air_date || movieDetails.release_date,
        type: type,
      },
    });

    // Create the relation entry in UsersOnMovies
    await prisma.usersOnMovies.create({
      data: {
        userId: userId,
        movieId: movie.id,
      },
    });

    revalidatePath('/');
    return movie;
  } catch (error) {
    console.error('Error adding movie to watchlist:', error);
    throw error;
  }
}

export async function getMoviesFromWatchList(clerkUserId: string) {
  try {
    // Find the user in the database
    const userId = await getDbUserId(clerkUserId);
    if (!userId) return [];

    // Fetch movies specific to the user
    const movies = await prisma.movie.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        id: 'desc',
      },
    });
    return movies;
  } catch (error) {
    console.error('Error getting movies from watchlist:', error);
    throw error;
  }
}