import { ThemeOptions } from "~/types/themes";

type State = {
    themePreference: ThemeOptions
}

export const useUserStore = defineStore('userStore', () => {
    const themePreference = ref<State['themePreference']>('dark');
    function setUserThemePreference(theme: ThemeOptions) {
        themePreference.value = theme
    }
    return {
        themePreference,
        setUserThemePreference
    }
})