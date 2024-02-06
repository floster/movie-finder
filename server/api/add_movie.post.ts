import { SearchResponse, Search } from "~/types/omdb";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return { body };
});
