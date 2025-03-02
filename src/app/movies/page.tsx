import MovieCard from "@/components/MovieCard"
import { getDiscover } from "@/lib/getMovies"

import PaginationComponent from "@/components/Pagination"
import Filters from "@/components/Filters"
async function Moviespage(props: {
  searchParams:{
    page: number,
    with_genres: string,
  }
}) {
  const {page} =await props.searchParams
  const {with_genres} =await props.searchParams
  const currentPage = Number(page) || 1;
  const movies = await getDiscover('movie', currentPage,with_genres)
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Movies</h2>
      <Filters media_type='movie'/>
      <div className="grid grid-cols-4 gap-4">
      {movies.map((movie) => (
          <MovieCard key={movie.id} item_type="movie" movie={movie} />
        ))}
      </div>

      <PaginationComponent/>


    </div>
  )
}

export default Moviespage