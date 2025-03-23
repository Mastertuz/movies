"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { Movie } from '../../../typings';
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
        , Fade()
      ]}>
      <CarouselContent>
        {movies.map((movie) => (
          <div key={movie.id} className='select-none flex-[0_0_100%] min-w-0 pl-4 relative'>
            <Link href={`${movie.media_type}/${movie.id}`}>
              <Image
                className='rounded-3xl max-h-[600px] object-cover'
                key={movie.id}
                src={movie.backdrop_path!=null?getImagePath(movie.backdrop_path, true):`/placeholder.svg`}
                width={1920}
                height={1080}
                alt={movie.title || 'movie slider img'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl" />
              <div className="absolute bottom-10 max-lg:bottom-2 max-lg:p-8 max-[450px]:bottom-0 left-0  p-10 space-y-5 max-lg:space-y-2 text-white z-20">
                <h2 className="text-5xl max-lg:text-4xl max-md:text-2xl max-[450px]:text-lg  font-bold  z-50">
                  {movie.title || movie.name}
                </h2>
                <p className="max-w-xl max-lg:text-sm max-[450px]:text-xs line-clamp-3 max-sm:line-clamp-2">{movie.overview}</p>
              </div>
            </Link>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default MovieSlider