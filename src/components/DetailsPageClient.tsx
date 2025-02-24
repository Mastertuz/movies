"use client";
import getImagePath from '@/lib/getImagePath';
import Image from 'next/image';
import { Details } from '../../typings';
type Props = {
  details: Details
}
function DetailspageClient({ details }: Props) {
  return (
    <div className='my-10'>
      <div className='flex gap-10'>
        <Image
          src={getImagePath(details.poster_path)}
          alt='Movie Banner'
          className='h-[450px] w-[300px] object-cover'
          width={1920}
          height={1080}
        />
        <div>
          <h4 className='text-3xl font-bold'>
            {details.title || details.name}
            <span className='text-2xl text-gray-400'> {new Date(details.release_date).getFullYear()}</span>
          </h4>
          <div>
            <span>{(details.vote_average *10).toFixed(0)}%</span>
          </div>
          <p>{details.tagline}</p>
          <h4 className='text-2xl font-bold mb-2'>Overview</h4>
          <p>{details.overview}</p>
          <div className='mt-2'>
          {details.genres.map((genre)=>(
                  <span key={genre.id}>{genre.name} </span>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailspageClient;