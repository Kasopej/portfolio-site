import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueSvgIconPlugin, {
        tagName: 'Icon'
    })
})
