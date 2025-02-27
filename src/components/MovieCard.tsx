import Image from "next/image"
import { Movie } from "../../typings"
import getImagePath from "@/lib/getImagePath"
import Link from "next/link"

type Props = {
  movie: Movie;
  item_type?: string;
};

function MovieCard({ movie, item_type }: Props) {
  return (
    <div className="cursor-pointer rounded-2xl flex-shrink-0 transform hover:scale-100 transition duration-200 ease-out hover:drop-shadow-lg">
      <Link href={`/${movie.media_type||item_type}/${movie.id}`}>
      
      <div className="rounded-2xl">
        <p>

        </p>
        <Image
        alt={movie.title||'movie img'}
        src={getImagePath(movie.backdrop_path )  }
        width={1920}
        height={1080}
        key={movie.id}
        className="w-fit h-56 object-cover rounded-2xl hover:scale-105 transition-all ease-in-out"
        />
      </div>
      </Link>

    </div>
  )
}

export default MovieCard