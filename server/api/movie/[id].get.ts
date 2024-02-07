import { MovieResponse, Movie } from "~/types/omdb";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const movieId = getRouterParam(event, "id");

  const url = `${config.public.OMDB_API_BASE}${config.OMDB_API_KEY}&i=${movieId}`;
  try {
    const response = (await $fetch(url)) as MovieResponse;

    if (response.Response === "False") return null;

    const data: Movie = {
      title: response.Title,
      year: response.Year,
      director: response.Director,
      poster: response.Poster,
    };

    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "OMDB API is not available at the moment. Please try again later.",
    });
  }
});
