import { ThemeOptions } from "~/types/themes";

export const usePreferences = () => {
  function setThemePreference(
    userAgentPreference: MediaQueryList | null,
    userAppPreference: ThemeOptions
  ) {
    const userAgentPrefersDark = !!userAgentPreference?.matches;
    const prefersDark = userAppPreference === 'dark';
    if (process.server) return
    if (prefersDark) setDarkTheme();
    else setLightTheme();
  }

  return {
    setThemePreference
  }
}
