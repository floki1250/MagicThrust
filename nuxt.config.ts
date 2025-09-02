// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
compatibilityDate: '2025-09-02',
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
  css: ["@/assets/main.css"],

  devtools: { enabled: false },
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ["@nuxt/icon", "@vueuse/nuxt"],

});