// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss', 'animate.css', 'bootstrap/dist/css/bootstrap.css', 'bootstrap-icons/font/bootstrap-icons.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/_colors.scss" as *; @use "~/assets/styles/_mixins-fadein.scss" as *; `,
          api: "modern-compiler",
        },
      },
    },
  },

  modules: ['nuxt-bootstrap-icons', "@nuxt/image", "@nuxt/ui"],
  plugins: ['~/plugins/p5.js'],
  compatibilityDate: '2024-11-16'
});