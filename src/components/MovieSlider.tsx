"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Movie } from '../../typings';
import Image from 'next/image';
import getImagePath from '@/lib/getImagePath';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function MovieSlider({ movies }: { movies: Movie[] }) {
  return (

    <Carousel plugins={[
      Autoplay({
        delay: 5000,
      }),
    ]}>
      <CarouselContent>
        {
          movies.map((movie) => (
            <div key={movie.id} className='rounded-[40px] flex-[0_0_100%] min-w-0'>
              <Image
                className='mx-auto h-[600px] object-cover'
                key={movie.id}
                src={getImagePath(movie.backdrop_path, true)}
                width={1920}
                height={1080}
                alt={movie.title}
              />
            </div>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}

export default MovieSlider