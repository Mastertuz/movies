'use server'
import { addToWatchlist, getMoviesFromWatchList } from "@/actions/movie.action"
import MovieCard from "@/components/shared/MovieCard"
import { auth } from "@clerk/nextjs/server"

async function Watchlistpage() {
  const {userId}=await auth()
  if (!userId)  return (<div>You are not authenticated </div>)
  const movies = await getMoviesFromWatchList(userId)
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Watchlist</h2>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-[450px]:grid-cols-1 gap-4 ">
      {movies.length>0?movies.map((movie) => (
          <MovieCard  key={movie.id} item_type="movie" movie={movie} />
        )):(<div>No movies in your watchlist</div>)}
      </div>

    </div>
  )
}

export default Watchlistpage