import { getGenres } from "@/lib/getMovies";
import { Genre } from "../../typings";
import FiltersClient from "./FiltersClient";

export default async function Filters() {
  const genres = await getGenres('movie') as Genre[];
  return (
    <FiltersClient genresList={genres}/>
  );
}
