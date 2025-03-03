import Filters from "@/components/Filters"
import MovieCard from "@/components/MovieCard"
import PaginationComponent from "@/components/Pagination"
import {  getDiscover } from "@/lib/getMovies"

async function Tvpage(props: {
  searchParams:{
    page: number,
    with_genres: string
  }
}) {
  const {page} =await props.searchParams
  const {with_genres} =await props.searchParams
  const currentPage = Number(page) || 1;
  const series = await getDiscover('tv', currentPage,with_genres)
  return (
    <div className="my-10">
     <h2 className="text-2xl mb-4">Series</h2>
     <Filters media_type='tv'/>
     <div className="grid grid-cols-4 gap-4">
       {series.map((seria)=>(
         <MovieCard key={seria.id} item_type='tv'  movie={seria}/>
       ))}
     </div>
     <PaginationComponent/>

    </div>
  )
}

export default Tvpage