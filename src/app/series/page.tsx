import Filters from "@/components/shared/Filters";
import MovieCard from "@/components/shared/MovieCard";
import PaginationComponent from "@/components/shared/Pagination";
import { getDiscover } from "@/lib/getMovies";

async function Tvpage(props: {
  searchParams: {
    page: number;
    with_genres: string;
    sort_by: string;
    primary_release_year: number;
  };
}) {
  const { page, with_genres, sort_by, primary_release_year } = await props.searchParams;
  const currentPage = Number(page) || 1;
  const series = await getDiscover("tv", currentPage, with_genres, sort_by, primary_release_year);

  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4">Series</h2>
      <Filters media_type="tv" primary_release_year={primary_release_year} />
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-[450px]:grid-cols-1 gap-4">
        {series.map((seria) => (
          <MovieCard key={seria.id} item_type="tv" movie={seria} />
        ))}
      </div>
      <PaginationComponent />
    </div>
  );
}

export default Tvpage;