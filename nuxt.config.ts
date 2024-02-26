// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    'nuxt-icon'
  ],
  alias: {
    '@': resolve(__dirname, '/')
  },
  tailwindcss: {
    cssPath: '~/assets/style/main.scss',
    configPath: 'tailwind.config',
    viewer: false
  },
  elementPlus: {
    importStyle: 'scss',
    themes: ['dark']
  }
})
