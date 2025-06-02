// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  css: ["@/assets/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '@/assets/styles/colors.scss' as *;
            @use '@/assets/styles/typography.scss' as *;
            @use '@/assets/styles/media.scss' as *;
          `,
        },
      },
    },
  },

  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Inter: {
        wght: [400, 500, 600, 700],
      },
    },
  },
});
