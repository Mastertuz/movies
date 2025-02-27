import MovieCard from "@/components/MovieCard"
import { getDiscover } from "@/lib/getMovies"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import PaginationComponent from "@/components/Pagination"


async function Moviespage(props: {
  searchParams:{
    page: number
  }
}) {
  const {page} =await props.searchParams
  const currentPage = Number(page) || 1;
  const movies = await getDiscover('movie', currentPage)
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Movies</h2>
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