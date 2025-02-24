export type Movie = {
  media_type: string,
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  type?: string
}


export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export type Details = {
  adult: boolean,
  backdrop_path: string,
  name?:string,
  belongs_to_collection: {
    id: 230,
    name: string,
    poster_path: string,
    backdrop_path: string
  },
  budget: number,
  genres: [
    {
      id: 18,
      name: string
    },
    {
      id: 80,
      name: string
    }
  ],
  id: number,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: [
    {
      id: 4,
      logo_path: string,
      name: string,
    },
    {
      id: 10211,
      logo_path: null,
      name: string,
    }
  ],
  production_countries: [
    {
      iso_3166_1: string,
      name: string
    }
  ],
  release_date: string,
  revenue: number,
  runtime: number,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number

}