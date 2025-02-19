import MovieCard from "@/components/MovieCard"
import { getDiscover } from "@/lib/getMovies"

async function Moviespage() {
  const movies = await getDiscover('movie')
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Movies</h2>

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default Moviespage