// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "MagicThrust",
    },
  },
  nitro: {
    storage: {
      data: {
        driver: "vercelKV",
      },
    },
  },
  runtimeConfig: {
    apiKey: process.env.GEMINI_APIKEY,
  },
  routeRules: {
    "/api/*": { cors: true },
  },
  css: ["@/assets/main.scss"],
  colorMode: {
    preference: "light", // default value of $colorMode.preference
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui"],
});
