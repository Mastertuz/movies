"use client";
import getImagePath from '@/lib/getImagePath';
import Image from 'next/image';
import { Credits, Details, Video, Videos } from '../../typings';
import CircularProgress from './CircleProgress';
import { Button } from './ui/button';
import { PlusIcon, CheckIcon } from 'lucide-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useUser } from '@clerk/nextjs';
import { addToWatchlist, removeFromWatchlist, isInWatchList } from '@/actions/movie.action';
import { useState } from 'react'; 
import { User } from '@clerk/nextjs/server';


const resolveRatingColor = (rating: number) => {
  if (rating >= 7) return "hsl(160.1 84.1% 39.4%)";
  else if (rating >= 5) return "hsl(24.6 95% 53.1%)";
  return "hsl(0 72.2% 50.6%)";
};

type Props = {
  details:    Details,
  userId:     string,
  is_added:   boolean | undefined,
  credits:    Credits,
  videos:     Videos,
  media_type: string
};

function DetailspageClient({ details, is_added, userId, credits, videos, media_type }: Props) {
  const [isAdded, setIsAdded] = useState<boolean>(is_added || false);

  if (!userId) return;

  const handleWatchlistToggle = async () => {
    if (isAdded) {
      await removeFromWatchlist(userId, details.id.toString());
      setIsAdded(false);
    } else {
      await addToWatchlist(userId, details, media_type);
      setIsAdded(true);
    }
  };

  const trailer = videos?.results?.find((video) => video?.type === 'Trailer') as Video;

  return (
    <div className='my-10'>
      <div className='flex gap-10 max items-center max-sm:items-start max-sm:gap-6 max-sm:flex-col'>
        <Image
          src={getImagePath(details.poster_path)}
          alt='Movie Banner'
          className='h-[450px] max-md:h-[400px]  max-md:max-w-64 max-sm:mx-auto  max-w-80 object-cover rounded-3xl'
          width={1920}
          height={1080}
        />

        <div>
          <h4 className='text-3xl font-bold mb-10 max-lg:mb-4 max-md:text-2xl max-md:mb-2 max-sm:text-lg'>
            {details.title || details.name}
            <span className='text-2xl text-gray-400 max-sm:text-lg ml-2'> 
              {new Date(details.release_date).getFullYear() || new Date(details.first_air_date).getFullYear()}
            </span>
          </h4>

          <div className='flex items-center space-x-4 mb-6 max-lg:mb-4'>
            <div className='flex space-x-2 items-center'>
              <CircularProgress 
                progressColor={resolveRatingColor(Number(details.vote_average))} 
                progress={Number((details.vote_average * 10).toFixed(0))} 
              />
              <p className='max-sm:text-sm max-[400px]:hidden'>User Score</p>
            </div>
            <Button 
              onClick={handleWatchlistToggle}
              className={`text-md max-sm:text-xs ${isAdded ? 'bg-[#10B981] hover:bg-[#10b98183]' : 'inherit'} text-white`} 
              variant={'outline'}
            >
              {isAdded ? (
                <>
                  <CheckIcon className='mr-2' /> In watchlist
                </>
              ) : (
                <>
                  <PlusIcon className='mr-2' /> Add to watchlist
                </>
              )}
            </Button>
          </div>

          <p className='text-sm text-gray-500 mb-4 max-lg:mb-2'>{details.tagline}</p>
          <h4 className='text-2xl max-md:text-lg font-bold mb-4 max-lg:mb-2'>Overview</h4>
          <p className='max-md:text-sm max-lg:line-clamp-3 max-sm:line-clamp-none'>{details.overview}</p>

          <div className='mt-8 space-x-2 max-lg:mt-4'>
            {details.genres.map((genre) => (
              <span className='uppercase text-sm max-md:text-xs font-bold p-2 bg-slate-800' key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10 '>
        <h4 className='text-2xl mb-4 uppercase'>Top Cast</h4>
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          plugins={[WheelGesturesPlugin()]}
          className="w-full"
        >
          <CarouselContent className="my-4">
            {credits.cast?.map((cast) => (
              <CarouselItem 
                key={cast.id} 
                className="text-center basis-1/6 max-lg:basis-1/5 max-md:basis-1/4 max-[540px]:basis-1/3 pl-4 cursor-pointer"
              >
                <Image
                  src={cast.profile_path != null ? getImagePath(cast.profile_path) : `/placeholder.svg`}
                  alt='Movie Banner'
                  className='h-[300px] max-lg:h-[230px] max-sm:h-[180px] mb-4 object-cover rounded-3xl'
                  width={1920}
                  height={1080} 
                />
                <h6 className='font-semibold max-sm:text-sm'>{cast.name}</h6>
                <p className='max-lg:text-xs'>{cast.character}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className='my-10 '>
        <h4 className='uppercase text-2xl mb-4'>Trailer</h4>
        <iframe
          width="100%"
          height='600px'
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          title="YouTube video player"
          allowFullScreen
          className='rounded-3xl max-md:h-[400px]'
        ></iframe>
      </div>
    </div>
  );
}

export default DetailspageClient;
