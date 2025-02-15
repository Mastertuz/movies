'use client'
import useEmblaCarousel from "embla-carousel-react"
import { Movie } from "../../typings"
import MovieCard from "./MovieCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Props={
  title:string,
  movies:Movie[],
  isVertical?:boolean
}
function MovieCarousel({title,movies,isVertical}:Props) {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className="">
     <h2 className="text-2xl mb-8">{title}</h2>
      
     <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {movies.map((movie)=>(
          <CarouselItem className="md:basis-1/4 sm:basis-1/3 lg:basis-1/5 pl-6 ">
            <MovieCard movie={movie} key={movie.id}/>
          </CarouselItem>
             ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>
  )
}

export default MovieCarousel