import { Details, SearchResults } from "../../typings"
import axios from 'axios'
async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");
  url.searchParams.set("vote_count.gte","2000")

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

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as SearchResults;
    return data;
  } catch (error) {
    console.error("Failed to fetch data from TMDB:", error);
    throw error;
  }
}

export async function getTopRated(type: string) {
  const url = new URL(`https://api.themoviedb.org/3/${type}/top_rated`)
  const data = await fetchFromTMDB(url)
  return data.results
}
export async function getUpcoming(type: string) {
  const url = type === 'tv' ? new URL('https://api.themoviedb.org/3/tv/on_the_air') : new URL('https://api.themoviedb.org/3/movie/upcoming')
  const data = await fetchFromTMDB(url)
  return data.results
}
export async function getTrending(type: string = 'all', time_window: string = 'week') {
  const url = new URL(`https://api.themoviedb.org/3/trending/${type}/${time_window}`)
  const data = await fetchFromTMDB(url)
  return data.results
}

export async function getDiscover(type: string) {
  const url = new URL(`https://api.themoviedb.org/3/discover/${type}`)
  const data = await fetchFromTMDB(url)
  return data.results
}

export async function getSearchedResults(term: string) {
  const url = new URL('https://api.themoviedb.org/3/search/multi')
  url.searchParams.set("query", term);
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");
  url.searchParams.set("vote_count.gte","5000")


  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data.results;
}

export async function getDetails(media_type:string,id:string) {
  const res = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=38fd1b5b8c1fdcae4a3d50b376b85bac`);
  return res?.data;
}


export async function GetCredits(media_type:string,id:string) {
  const res = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=38fd1b5b8c1fdcae4a3d50b376b85bac`);
  return res?.data;
}

export async function getVideos(id:string,media_type:string,) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  const res = await fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos`,options)
  const data = await res.json()
  return data
}