import { resolve } from 'path';
import svgIcon from 'vite-plugin-svgicon'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  alias: {
    'styles': resolve('./assets/styles'),
  },
  devtools: { enabled: true },
  css: ['styles/css/index.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'url',
        svgoConfig: {
          multipass: true
        }
      }),
      svgIcon({ include: '**/assets/**/*.svg' })
    ],
    vue: {
      template: {
        transformAssetUrls: {
          Icon: ['data']
        }
      }
    }
  },
})
