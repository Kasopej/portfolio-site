import { Pinia } from "pinia"
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2"
import localForage from 'localforage'
import Cookies from 'js-cookie'
import cookie from 'cookie'

export default defineNuxtPlugin((nuxtApp) => {
    (nuxtApp.$pinia as Pinia).use(createPersistedStatePlugin({
        storage: {
            getItem(key) {
                if (process.server) {
                    return Cookies.get(cookie.parse(useRequestHeaders(['cookie']).cookie as string)[key])
                }
                return localForage.getItem(key)
            },
            setItem(key, value) {
                localForage.setItem(key, value);
                Cookies.set(key, value, { expires: 365, secure: false })
            },
            removeItem(key) {
                localForage.removeItem(key);
                Cookies.remove(key)
            }
        },

    }))
})