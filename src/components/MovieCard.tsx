import Image from "next/image"
import { Movie } from "../../typings"
import getImagePath from "@/lib/getImagePath"
import Link from "next/link"

type Props = {
  movie: Movie;
  item_type?: string;
  isVertical?: boolean;
};

function MovieCard({ movie, item_type }: Props) {
  return (
    <div className="relative cursor-pointer rounded-2xl flex-shrink-0 transform hover:scale-100 transition duration-200 ease-out hover:drop-shadow-lg">
      <Link href={`/${movie.media_type || item_type}/${movie.id}`}>
        <div className="rounded-2xl overflow-hidden">
          <Image
            alt={movie.title || 'movie img'}
            src={getImagePath(movie.backdrop_path)}
            width={1920}
            height={1080}
            key={movie.id}
            className='w-fit h-56 max-xl:h-44 max-md:h-40 max-sm:h-28 max-[380px]:w-full object-cover rounded-2xl hover:scale-105 transition-all ease-in-out'
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-2xl">
            <span className="text-white text-sm font-semibold max-sm:text-xs">{movie.title||movie.name}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard