// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@pinia/nuxt"],
  css: ["@/assets/scss/main.scss"],
  plugins: [],
  nitro: {},
  components: {
    global: true,
    dirs: ["~/components/UI"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/global/vars.scss" as *;
            @use "~/assets/scss/global/mixins.scss" as *;
            @use "~/assets/scss/global/global.scss" as *;
          `,
        },
      },
    },
  },
});
