import { ThemeOptions } from "~/types/themes";

export const usePreferences = () => {
  const userStore = useUserStore();
  const { themePreference } = storeToRefs(userStore);

  function setThemePreference(
    userAppPreference: ThemeOptions
  ) {
    const prefersDark = userAppPreference === 'dark';
    if (process.server) return
    if (prefersDark) setDocumentDarkTheme();
    else setDocumentLightTheme();
  }

  watch(
    themePreference,
    (currentValue) => {
      if (!currentValue) return;
      setThemePreference(currentValue);
    },
    { immediate: true }
  );

  return {
    setThemePreference
  }
}
