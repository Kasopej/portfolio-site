import { resolve, sep } from 'path';
export default defineNuxtConfig({
  alias: {
    'styles': resolve('./assets/styles'),
  },
  devtools: { enabled: true }
})
