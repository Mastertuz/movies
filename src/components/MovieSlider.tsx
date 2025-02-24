"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
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
import Link from 'next/link';

function MovieSlider({ movies }: { movies: Movie[] }) {
  return (

    <Carousel
    className='mb-10'
    plugins={[
      Autoplay({
        delay: 5000,
      })
      ,Fade()
    ]}>
      <CarouselContent className=''>
        {
          movies.map((movie) => (
            <div key={movie.id} className='flex-[0_0_100%] min-w-0 pl-4'>
              <Link href={`${movie.media_type}/${movie.id}`}>
              <Image
                className='rounded-3xl max-h-[600px] object-cover '
                key={movie.id}
                src={getImagePath(movie.backdrop_path, true)}
                width={1920}
                height={1080}
                alt={movie.title||'movie slider img'}
              />
            </Link>
            </div>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}

export default MovieSlider