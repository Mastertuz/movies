import Image from "next/image"
import { Movie } from "../../typings"
import getImagePath from "@/lib/getImagePath"

function MovieCard({movie}:{movie:Movie}) {
  return (
    <div>
      <div>
        <p>

        </p>
        <Image
        alt={movie.title}
        src={getImagePath(movie.backdrop_path || movie.poster_path)  }
        width={1920}
        height={1080}
        key={movie.id}
        className="w-fit h-56"
        />
      </div>
    </div>
  )
}

export default MovieCard