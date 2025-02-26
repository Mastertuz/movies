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

async function Moviespage() {
  const movies = await getDiscover('movie')
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Movies</h2>

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} item_type="movie" movie={movie} />
        ))}
      </div>

      <Pagination  className="my-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>


    </div>
  )
}

export default Moviespage