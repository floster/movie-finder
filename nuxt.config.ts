// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: { dirs: ["types"] },
  app: {
    head: {
      title: "MovieFinder",
      meta: [
        {
          name: "description",
          content: "Search for movies and TV shows",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
    public: {
      OMDB_API_BASE: "http://www.omdbapi.com/?apikey=",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@element-plus/nuxt",
    "nuxt-swiper",
  ],
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
  swiper: {
    modules: ["navigation", "pagination", "mousewheel", "free-mode"],
  },
});
