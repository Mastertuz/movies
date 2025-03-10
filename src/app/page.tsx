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
      <div className="flex flex-col space-y-10 max-lg:space-y-6 mb-10" >
       <MovieCarousel title="Top Rated Movies" movies={topRatedMovies} media_type='movie'/>
       <MovieCarousel title="Top Rated Series" movies={topRatedSeries} media_type='tv'/>
       <MovieCarousel title="Trending Series and Movies" movies={trending} />
       <MovieCarousel title="Upcoming Movies" movies={upcomingMovies} media_type='movie'/>
       <MovieCarousel title="Upcoming Series" movies={upcomingSeries} media_type='tv'/>

      </div>
    </main>
  );
}
