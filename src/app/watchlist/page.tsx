import { getMoviesFromWatchList } from "@/actions/movie.action"
import MovieCard from "@/components/MovieCard"

async function Watchlistpage() {
  const movies = await getMoviesFromWatchList()
  console.log(movies)
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Watchlist</h2>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-[450px]:grid-cols-1 gap-4 ">
      {movies.map((movie) => (
          <MovieCard  key={movie.id} item_type="movie" movie={movie} isVertical />
        ))}
      </div>

    </div>
  )
}

export default Watchlistpage