// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "MovieFinder",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@element-plus/nuxt",
    "nuxt-icon",
    "nuxt-swiper",
  ],
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
  swiper: {
    // TODO: remove unnecessary modules
    modules: ["navigation", "pagination"],
  },
});
