import { getGenres } from "@/lib/getMovies";
import { Genre } from "../../typings";
import FiltersClient from "./FiltersClient";

export default async function Filters(props: {
  media_type: string;
  primary_release_year: number;
}) {
  const sortBy = [
    {
      value: "popularity.desc",
      name: "Popularity",
    },
    { value: "vote_average.desc", name: "Rating" },
    { value: "vote_count.desc", name: "Votes" },
  ];
  const { media_type} = await props;
  const genres = (await getGenres(`${media_type}`)) as Genre[];
  return (
    <FiltersClient
      genresList={genres}
      sortBy={sortBy}
    />
  );
}
