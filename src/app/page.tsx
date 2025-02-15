import MovieCarousel from "@/components/MovieCarousel";
import MovieSliderWrapper from "@/components/MovieSliderWrapper";
import { getTopRated, getTrending, getUpcoming } from "@/lib/getMovies";

export default async function Home() {
  const trending= await getTrending()
  const upcomingMovies= await getUpcoming('movie')
  const upcomingSeries= await getUpcoming('tv')
  const topRatedMovies= await getTopRated('movie')
  const topRatedSeries= await getTopRated('tv')
  return (
    <main>
      <MovieSliderWrapper/>

      <div className="flex flex-col space-y-10">

       <MovieCarousel title="Top Rated Movies" movies={topRatedMovies}/>
       <MovieCarousel title="Top Rated Series" movies={topRatedSeries}/>
       <MovieCarousel title="Trending Series and Movies" movies={trending}/>
       <MovieCarousel title="Upcoming Movies" movies={upcomingMovies}/>
       <MovieCarousel title="Upcoming Series" movies={upcomingSeries}/>

      </div>
    </main>
  );
}
