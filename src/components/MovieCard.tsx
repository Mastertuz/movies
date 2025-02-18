import Image from "next/image"
import { Movie } from "../../typings"
import getImagePath from "@/lib/getImagePath"

function MovieCard({movie}:{movie:Movie}) {
  return (
    <div className="rounded-2xl flex-shrink-0 transform hover:scale-100 transition duration-200 ease-out hover:drop-shadow-lg">
      <div className="rounded-2xl">
        <p>

        </p>
        <Image
        alt={movie.title||'movie img'}
        src={getImagePath(movie.backdrop_path || movie.poster_path)  }
        width={1920}
        height={1080}
        key={movie.id}
        className="w-fit h-56 object-cover rounded-2xl hover:scale-105 transition-all ease-in-out"
        />
      </div>
    </div>
  )
}

export default MovieCard