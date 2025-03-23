import MovieCard from "@/components/shared/MovieCard"
import { getDiscover } from "@/lib/getMovies"

import PaginationComponent from "@/components/shared/Pagination"
import Filters from "@/components/shared/Filters"
async function Moviespage(props: {
  searchParams:{
    page: number,
    with_genres: string,
    sort_by:string,
    primary_release_year:number,
  }
}) {
  const {page} =await props.searchParams
  const {sort_by} =await props.searchParams
  const {primary_release_year} =await props.searchParams
  const {with_genres} =await props.searchParams
  const currentPage = Number(page) || 1;
  const movies = await getDiscover('movie', currentPage,with_genres,sort_by,primary_release_year)
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Movies</h2>
      <Filters media_type='movie' primary_release_year={primary_release_year}/>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-[450px]:grid-cols-1 gap-4 ">
      {movies.map((movie) => (
          <MovieCard  key={movie.id} item_type="movie" movie={movie} isVertical />
        ))}
      </div>

      <PaginationComponent/>


    </div>
  )
}

export default Moviespage