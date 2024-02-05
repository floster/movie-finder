import { MovieResponse, Movie } from "~/types/omdb";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const movieId = getRouterParam(event, "id");

  const url = `${config.public.OMDB_API_BASE}${config.OMDB_API_KEY}&i=${movieId}`;

  const response = (await $fetch(url)) as MovieResponse;

  const data: Movie = {
    title: response.Title,
    year: response.Year,
    director: response.Director,
    poster: response.Poster,
    response: response.Response === "True" ? true : false,
  };

  return data;
});
