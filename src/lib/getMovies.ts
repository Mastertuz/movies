import { Movie, SearchResults } from "../../typings"

export async function getTopRated(type: string) {
  const data = await fetch(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${process.env.API_KEY}&vote_count.gte=5000`)
  const res = await data.json()
  return res?.results as Movie[]
}
export async function getUpcoming(type: string) {
  const url = type === 'tv' ? 'https://api.themoviedb.org/3/tv/on_the_air' : 'https://api.themoviedb.org/3/movie/upcoming'
  const data = await fetch(`${url}?api_key=${process.env.API_KEY}&vote_count.gte=5000`)
  const res = await data.json()
  return res?.results as Movie[]
}
export async function getTrending(type: string = 'all', time_window: string = 'week') {
  const data = await fetch(`https://api.themoviedb.org/3/trending/${type}/${time_window}?api_key=${process.env.API_KEY}&vote_count.gte=5000`)
  const res = await data.json()
  return res?.results as Movie[]
}

export async function getDiscover(type: string, page: number, genre?: string,sort_by?:string,year?:number) {
  const data = await fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.API_KEY}&page=${page}&with_genres=${genre||''}&sort_by=${sort_by||''}&${type==='tv'?'first_air_date_year':'primary_release_year'}=${year||''}&vote_count.gte=200
    `)
  const res = await data.json()
  return res?.results as Movie[]
}

export async function getSearchedResults(term: string) {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${term}`
  const data = await fetch(url)
  const res = await data.json() as SearchResults
  return res.results;
}

export async function getDetails(media_type: string, id: string) {
  const data = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res
}


export async function GetCredits(media_type: string, id: string) {
  const data = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res;
}

export async function getVideos(id: string, media_type: string) {
  const res = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.API_KEY}`)
  const data = await res.json()
  return data
}

export async function getGenres(media_type: string) {
  const data = await fetch(`https://api.themoviedb.org/3/genre/${media_type}/list?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res?.genres
}
