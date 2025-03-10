import MovieCard from "@/components/MovieCard"
import MovieCarousel from "@/components/MovieCarousel"
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
  if (results.length === 0) {
    notFound()
  }
  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Results for {termToUse}</h2>
      <div className="grid grid-cols-5 max-xl:grid-cols-4  max-lg:grid-cols-3 max-[520px]:grid-cols-2 max-[380px]:grid-cols-1 gap-4">

      {results.map((item)=>(
       <MovieCard key={item.id} movie={item}/>
      ))}
      </div>
    </div>
  )
}

export default Searchpage