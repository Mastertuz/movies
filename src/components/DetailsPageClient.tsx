"use client";
import getImagePath from '@/lib/getImagePath';
import Image from 'next/image';
import { Credits, Details, Video, Videos } from '../../typings';
import CircularProgress from './CircleProgress';
import { Button } from './ui/button';
import { PlusIcon } from 'lucide-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
type Props = {
  details: Details,
  credits:Credits,
  videos:Videos
}

const resolveRatingColor= (rating:number)=>{
  if (rating >= 7) {
    return "hsl(160.1 84.1% 39.4%)";
  } else if (rating >= 5) {
    return "hsl(24.6 95% 53.1%)";
  } else {
    return "hsl(0 72.2% 50.6%)";
  }
}

 function DetailspageClient({ details ,credits,videos}: Props) {
  const trailer= videos?.results?.find((video)=>video?.type==='Trailer') as Video
  console.log(videos)
  return (
    <div className='my-10 '>
      <div className='flex gap-10 items-center'
      
      >
        <Image
          src={getImagePath(details.poster_path)}
          alt='Movie Banner'
          className='h-[450px] max-w-80 object-cover rounded-3xl'
          width={1920}
          height={1080}

        />
        <div>
          <h4 className='text-3xl font-bold mb-10'>
            {details.title || details.name}
            <span className='text-2xl text-gray-400'> {new Date(details.release_date).getFullYear()
              ||new Date(details.first_air_date).getFullYear()
              }</span>
          </h4>
          <div className='flex items-center space-x-4 mb-6'>
            <CircularProgress progressColor={resolveRatingColor(Number(details.vote_average))} progress={Number((details.vote_average * 10).toFixed(0))} />
            <p className=''>User Score</p>
            <Button className='text-md' variant={'outline'}>
              <PlusIcon/>
              Add to watchlist</Button>
          </div>
          <p className='text-sm text-gray-500 mb-4'>{details.tagline}</p>
          <h4 className='text-2xl font-bold mb-4'>Overview</h4>
          <p>{details.overview}</p>
          <div className='mt-8 space-x-2 '>
            {details.genres.map((genre) => (
              <span className='uppercase text-sm font-bold p-2 bg-slate-800' key={genre.id}>{genre.name} </span>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10'>
        <h4 className='text-2xl mb-4 uppercase'>Top Cast</h4>
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
          {credits.cast?.map((cast) => (
            <CarouselItem key={cast.id} className="  md:basis-1/4 text-center  sm:basis-1/3 lg:basis-1/5 pl-4  cursor-pointer">
                <Image
                  src={getImagePath(cast.profile_path)}
                  alt='Movie Banner'
                  className='h-[300px] mb-4 object-cover rounded-3xl'
                  width={1920}
                  height={1080}/>
                  <h6 className='font-semibold'>{cast.name}</h6>
                  <p >{cast.character}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>

      <div className='my-10'>
        <h4 className='uppercase text-2xl mb-4'>Trailer</h4>
        <iframe
      width="100%"
      height='600px'
      src={`https://www.youtube.com/embed/${trailer?.key}`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>

      </div>

      
    </div>
  );
}

export default DetailspageClient;