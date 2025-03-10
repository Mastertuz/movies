import {getTrending } from "@/lib/getMovies"
import MovieSlider from "./MovieSlider"



async function MovieSliderWrapper() {
  const movies = await getTrending()
  return (
    <MovieSlider movies={movies}/>
  )
}

export default MovieSliderWrapper