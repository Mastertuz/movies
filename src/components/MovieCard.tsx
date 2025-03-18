import Image from "next/image";
import { Movie } from "../../typings";
import getImagePath from "@/lib/getImagePath";
import Link from "next/link";

type Props = {
  movie: Movie;
  item_type?: string;
  isVertical?: boolean;
};

const resolveRatingColor = (rating: number) => {
  if (rating >= 7) {
    return "hsl(160.1 84.1% 39.4%)";
  } else if (rating >= 5) {
    return "hsl(24.6 95% 53.1%)";
  } else {
    return "hsl(0 72.2% 50.6%)";
  }
};

function MovieCard({ movie, item_type,isVertical }: Props) {

  return (
    <div className="relative cursor-pointer rounded-2xl flex-shrink-0 transform hover:scale-100 transition duration-200 ease-out hover:drop-shadow-lg">
      <Link href={`/${movie.media_type || item_type}/${movie.tmdb_id || movie.id}`}>
        <div className="rounded-2xl overflow-hidden">
          <Image
            alt={movie.title || "movie img"}
            src={movie.backdrop_path!=null?getImagePath(movie.backdrop_path):`/placeholder.svg`}
            width={1920}
            height={1080}
            key={movie.id}
            className="w-fit max-xl:w-full h-56 max-xl:h-44 max-md:h-32   max-sm:w-full object-cover rounded-2xl hover:scale-105 transition-all ease-in-out"
          />
          {(movie.vote_average !== 0 && movie.vote_average != undefined) && (
            <div
              className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded`}
              style={{
                backgroundColor: resolveRatingColor(movie.vote_average),
              }}
            >
              {movie.vote_average?.toFixed(1)}
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-2 rounded-b-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <span className="text-white text-sm font-semibold max-sm:text-xs">
              {movie.title || movie.name}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
