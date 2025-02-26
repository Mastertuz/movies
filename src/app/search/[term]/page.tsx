import MovieCard from "@/components/MovieCard"
import MovieCarousel from "@/components/MovieCarousel"
import { Button } from "@/components/ui/button"
import { getSearchedResults } from "@/lib/getMovies"
import { notFound } from "next/navigation"

type Props = {
  params: {
    term: string
  }
}

async function Searchpage({  params }: Props) {
  const { term } = await params
  if (!term) notFound()
  const termToUse =  decodeURI(term)
  const results= await getSearchedResults(termToUse)
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Results for {termToUse}</h2>
      <div className="grid grid-cols-4 gap-4">

      {results.map((item)=>(
       <MovieCard key={item.id} movie={item}/>
      ))}
      </div>
    </div>
  )
}

export default Searchpage