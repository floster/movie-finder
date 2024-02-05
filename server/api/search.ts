import { SearchResponse, Search } from "~/types/omdb";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { q: query } = getQuery(event);

  const url = `${config.public.OMDB_API_BASE}${config.OMDB_API_KEY}&s=${query}`;

  const response = (await $fetch(url)) as SearchResponse;

  const data: Search = {
    results: response.Search.map((result) => ({
      title: result.Title,
      year: result.Year,
      imdbID: result.imdbID,
      poster: result.Poster,
    })),
    qty: response.totalResults,
    response: response.Response === "True" ? true : false,
  };

  return data;
});
