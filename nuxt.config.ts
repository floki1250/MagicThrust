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
  css: ["@/assets/main.scss"],
  colorMode: {
    preference: "light", // default value of $colorMode.preference
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
});
