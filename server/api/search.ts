export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const { q: query } = getQuery(event);

  console.log("server query", query, config.OMDB_API_KEY);

  return {};
});
