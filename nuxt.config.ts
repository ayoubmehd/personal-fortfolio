// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@intlify/nuxt3"],
  intlify: {
    localeDir: "locales",
    vueI18n: {
      fallbackLocale: "en",
    },
  },
});
