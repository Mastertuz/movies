import MovieCard from "@/components/shared/MovieCard"
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
      <div className="flex flex-col space-y-12">
      {
      results.map((item) => (
        <div className="flex max-[450px]:flex-col  space-x-6 max-[450px]:space-x-0 max-[450px]:space-y-6 items-center max-[450px]:items-stretch" key={item.id}>
          <MovieCard movie={item} />
          <div className="max-w-2xl">
            <h4 className="text-2xl  max-md:text-base max-sm:text-sm font-bold">{item?.title || item?.name} <span className="text-lg max-md:text-sm max-sm:text-xs"> ({item?.release_date ? new Date(item.release_date).getFullYear() : item?.first_air_date ? new Date(item.first_air_date).getFullYear() : 'N/A'})</span></h4>
            <hr className="my-2" />
            <p className="max-md:text-xs line-clamp-3">{item?.overview}</p>
          </div>
        </div>
      ))
      }
      </div>
    </div>
  )
}

export default Searchpage