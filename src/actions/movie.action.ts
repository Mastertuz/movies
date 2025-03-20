'use server'
import { revalidatePath } from 'next/cache';
import { Details } from '../../typings';
import { getDbUserId } from './user.action';
import { prisma } from '@/lib/db';

export async function addToWatchlist(clerkUserId: string, movieDetails: Details, type: string) {
  try {
    const userId = await getDbUserId(clerkUserId);
    if (!userId) return;
    let movie = await prisma.movie.findUnique({
      where: { tmdb_id: movieDetails.id.toString() }
    });

    if (!movie) {
      movie = await prisma.movie.create({
        data: {
          title: movieDetails.title || '',
          tmdb_id: movieDetails.id.toString(),
          media_type: type,
          poster_path: movieDetails.poster_path,
          adult: movieDetails.adult || false,
          backdrop_path: movieDetails.backdrop_path || '',
          genre_ids: movieDetails.genres.map((genre) => genre.id),
          release_date: movieDetails.release_date || movieDetails.first_air_date,
          vote_average: movieDetails.vote_average,
          name: movieDetails.name || '',
          original_language: movieDetails?.original_language,
          original_title: movieDetails?.original_title || movieDetails.title || '',
          original_name: movieDetails.name || '',
          overview: movieDetails.overview,
          popularity: movieDetails.popularity,
          video: movieDetails.video || false,
          vote_count: movieDetails.vote_count,
          first_air_date: movieDetails.first_air_date || movieDetails.release_date,
          type: type,
        },
      });
    }
    // Add movie to user's watchlist through UsersOnMovies table
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


export async function isInWatchList(clerkUserId: string, movieId: string) {
          try{
            const userId = await getDbUserId(clerkUserId);
            if (!userId) return false;
            let movie = await prisma.movie.findUnique({
              where: { tmdb_id: movieId.toString() }
            });
            if (!movie) return false        
            const existingEntry = await prisma.usersOnMovies.findUnique({
              where: {
                userId_movieId: {
                  userId: userId,
                  movieId: movie?.id,
                },
              },
            });
            if(existingEntry) return true
          }catch(error){
            console.log('Error checking if movie is in watchlist:', error);
          }
}



export async function removeFromWatchlist(clerkUserId: string, movieId: string) {
  try {
    const userId = await getDbUserId(clerkUserId);
    if (!userId) return;

    const movie = await prisma.movie.findUnique({
      where: { tmdb_id: movieId }
    });

    if (!movie) throw new Error('Movie not found');

    // Remove only the user's association
    await prisma.usersOnMovies.deleteMany({
      where: {
        userId: userId,
        movieId: movie.id
      }
    });

    // Check if the movie is still linked to other users
    const remainingLinks = await prisma.usersOnMovies.count({
      where: { movieId: movie.id }
    });

    // Delete the movie only if no other users are linked
    if (remainingLinks === 0) {
      await prisma.movie.delete({
        where: { id: movie.id }
      });
    }

    console.log('Movie removed from watchlist:', movieId);
    revalidatePath('/');
  } catch (error) {
    console.log('Error removing movie from watchlist:', error);
  }
}



export async function getMoviesFromWatchList(clerkUserId: string) {
  try {
    const userId = await getDbUserId(clerkUserId);
    if (!userId) return [];

    const movies = await prisma.movie.findMany({
      where: {
        users: {   // Correct relation field name (camelCase)
          some: { userId: userId }
        }
      },
      orderBy: { id: 'desc' },
    });

    return movies;
  } catch (error) {
    console.error('Error getting movies from watchlist:', error);
    throw error;
  }
}




