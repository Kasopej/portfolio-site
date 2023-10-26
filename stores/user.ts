import { ThemeOptions } from "~/types/themes";

type State = {
    themePreference: ThemeOptions | null
}

export const useUserStore = defineStore('userStore', () => {
    const themePreference = ref<State['themePreference']>(null);
    function setUserThemePreference(theme: ThemeOptions) {
        themePreference.value = theme
    }
    return {
        themePreference,
        setUserThemePreference
    }
})