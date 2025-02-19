import MovieCard from "@/components/MovieCard"
import {  getDiscover } from "@/lib/getMovies"

async function Tvpage() {
  const series = await getDiscover('tv')
  return (
    <div className="my-10">
     <h2 className="text-2xl mb-4">Series</h2>

     <div className="grid grid-cols-4 gap-4">
       {series.map((seria)=>(
         <MovieCard key={seria.id}  movie={seria}/>
       ))}
     </div>

    </div>
  )
}

export default Tvpage