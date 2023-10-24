import { resolve } from 'path';
import svgIcon from 'vite-plugin-svgicon'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  alias: {
    'styles': resolve('./assets/styles'),
  },
  app: {
    head: {
      link: [
        { href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap", rel: "stylesheet", crossorigin: 'anonymous' }
      ]
    }
  },
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
          Icon: ['data'],
          video: ['src', 'poster'],
          source: ['src'],
          img: ['src'],
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href']
        }
      }
    }
  },
  devtools: { enabled: true },
})
