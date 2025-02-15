import { SearchResults } from "../../typings"

async function fetchFromTMDB(url:URL,cacheTime?:number) {

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };
  
  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
  return data;
}

export async function getTopRated(type:string) {
  const url = new URL(`https://api.themoviedb.org/3/${type}/top_rated`)
  const data = await fetchFromTMDB(url)
  return data.results
}
export async function getUpcoming(type:string) {
  const url = type==='tv'? new URL('https://api.themoviedb.org/3/tv/on_the_air'):new URL('https://api.themoviedb.org/3/movie/upcoming')
  const data = await fetchFromTMDB(url)
  return data.results
}
export async function getTrending(type:string='all',time_window:string='week') {
  const url = new URL(`https://api.themoviedb.org/3/trending/${type}/${time_window}`)
  const data = await fetchFromTMDB(url)
  return data.results
}