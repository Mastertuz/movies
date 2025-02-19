'use client'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { Movie } from "../../typings"
import MovieCard from "./MovieCard"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

type Props = {
  title: string,
  movies: Movie[],
  isVertical?: boolean
}
function MovieCarousel({ title, movies, isVertical }: Props) {

  return (
    <div className="">
      <h2 className="text-2xl mb-8">{title}</h2>

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
        <CarouselContent className="my-4">
          {movies?.map((movie) => (
            <CarouselItem key={movie.id} className="md:basis-1/4  sm:basis-1/3 lg:basis-1/5 pl-6 ">
              <Link href={`/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
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