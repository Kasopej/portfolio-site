<template>
  <main class="layout default">
    <header>
      <nav class="container">
        <div class="brand">
          <span class="brand-name"> Kasope </span>
        </div>
        <ul class="nav-menu">
          <li class="nav-item"><a href="#" class="nav-link">home</a></li>
          <li class="nav-item"><a href="#" class="nav-link">works</a></li>
          <li class="nav-item"><a href="#" class="nav-link">about-me</a></li>
          <li class="nav-item"><a href="#" class="nav-link">contacts</a></li>
          <li class="nav-item">
            EN
            <span class="icon"></span>
          </li>
          <li class="nav-item">
            <ThemeControl />
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </main>
</template>

<script setup lang="ts">
  const userStore = useUserStore();
  const { themePreference } = storeToRefs(userStore);
  const { setThemePreference } = usePreferences();

  let userAgentThemeSetting: MediaQueryList | null = null;
  onMounted(() => {
    userAgentThemeSetting = window.matchMedia("(prefers-color-scheme: dark)");
    userAgentThemeSetting.addEventListener("change", function () {
      setThemePreference(this, themePreference.value);
    });
  });

  watch(
    themePreference,
    (currentValue) => setThemePreference(userAgentThemeSetting, currentValue),
    { immediate: true }
  );
</script>

<style scoped lang="scss">
  main {
    > * {
      width: 100%;
    }
  }
  nav {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0 8px 0;
  }
  ul.nav-menu {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      display: inline;
      &:not(:first-child) {
        margin-left: 32px;
      }
    }
  }
</style>
