// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['@/assets/scss/main.scss', '@/assets/scss/font-icons/app-icons.css', '@/assets/styles/components/_footer.scss'], // '@/public/font-icons/app-icons.css'
  modules: [
    '@nuxt/fonts', 
    '@nuxt/image',
    'nuxt-svgo',
    'nuxt-swiper'
  ],
  svgo: {
    autoImportPath: './assets/icons/',
  },
  image: {
    screens: {
      xs: 375,
      sm: 768,
      md: 991,
      lg: 1200,
    },
  },
})