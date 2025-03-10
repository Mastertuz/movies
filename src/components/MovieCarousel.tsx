'use client'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { Movie } from "../../typings"
import MovieCard from "./MovieCard"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type Props = {
  title: string,
  movies: Movie[],
  media_type?: string,
  isVertical?: boolean
}

function MovieCarousel({ title, movies,  media_type }: Props) {
  return (
    <div className="select-none">
      <h2 className="text-2xl mb-8 max-lg:mb-2 max-sm:text-xl">{title}</h2>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        plugins={[
          WheelGesturesPlugin(),
        ]}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {movies?.map((movie) => ( 
            <CarouselItem key={movie.id} className="lg:basis-1/4 basis-1/2  max-[450px]:basis-full sm:basis-1/3 2xl:basis-1/4  pl-4">
              <MovieCard  movie={movie} item_type={media_type} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
    </div>
  )
}

export default MovieCarousel