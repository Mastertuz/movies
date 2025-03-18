export interface Movie  {
  media_type?: string |null,
  adult?: boolean|null;
  backdrop_path?: string|null;
  genre_ids?: number[] |null;
  id: number;
  tmdb_id?: string |null;
  original_language?: string|null;
  original_title?: string|null;
  original_name?: string|null;
  overview?: string|null;
  popularity?: number |null;
  poster_path?: string|null;
  release_date?: string |null;
  title?: string |null;
  name?: string |null;
  video?: boolean |null;
  vote_average?: number |null;
  vote_count?: number |null;
  first_air_date?: string |null;
  type?: string |null;
}


export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export type Details = {
  adult?: boolean,
  backdrop_path: string|undefined,
  name?: string,
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
  original_language: string,
  original_name: string,
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
  first_air_date: string;
  revenue: number,
  runtime: number,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number

}

export type Cast = {
  adult: false,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: 0
}
export type Crew = {
  adult: false,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  credit_id: number,
  department: string,
  job: string
}
export type Credits = {
  id: number,
  cast: Cast[],
  crew: Crew[]
}
export type Video = {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string
}
export type Videos = {
  id: number,
  results: Video[]
}

export type Genre= {
  id: number,
  name: string
}
