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
    "@nuxtjs/seo",
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: 'Kasope\'s Portfolio',
    description: 'Kasope\'s Portfolio',
  },
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
  typescript: {
    tsConfig: {
      include: [resolve("./index.d.ts"),],
    }
  },
  devtools: { enabled: true },
})
