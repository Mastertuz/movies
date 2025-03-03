import { getGenres } from "@/lib/getMovies";
import { Genre } from "../../typings";
import FiltersClient from "./FiltersClient";



export default async function Filters(
  props:{
    media_type: string
  }
) {
  const {media_type} = await props;
  const genres = await getGenres(`${media_type}`) as Genre[];
  return (
    <FiltersClient genresList={genres} />
  );
}
