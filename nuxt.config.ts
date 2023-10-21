import { resolve, sep } from 'path';
export default defineNuxtConfig({
  alias: {
    'styles': resolve('./assets/styles'),
  },
  devtools: { enabled: true },
  css: ['styles/scss/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "styles/scss/_colors.scss" as *;'
        }
      }
    }
  }
})
