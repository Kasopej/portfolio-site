<template>
  <main class="layout default">
    <header>
      <nav class="container">
        <div class="brand">
          <span class="brand-name">
            <Icon
              data="@/assets/svgs/icons/brand-logo.svg"
              class="brand-icon default-icon-stroke"
            />
            Kasope
          </span>
        </div>
        <ul class="nav-menu">
          <li class="nav-item">
            <MenuLink to="/" class="nav-link"> home </MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink to="/about" class="nav-link"> works </MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink to="/about" class="nav-link"> about-me </MenuLink>
          </li>
          <li class="nav-item">
            <MenuLink to="/about" class="nav-link"> contact </MenuLink>
          </li>
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
    // listen for UA theme changes (only applied if no user preference already set)
    userAgentThemeSetting = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ) as MediaQueryList;
    userAgentThemeSetting.addEventListener("change", function () {
      if (!themePreference.value)
        themePreference.value = this.matches ? "dark" : "light";
      setThemePreference(themePreference.value);
    });
  });
</script>

<style scoped lang="scss">
  main {
    > * {
      width: 100%;
    }
  }
  header {
    margin-bottom: 64px;
  }
  nav {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0 8px 0;
    .brand-icon {
      margin-right: 8px;
    }
  }
  ul.nav-menu {
    list-style: none;
    display: flex;
    align-items: center;
    li.nav-item {
      display: inline;
      &:not(:first-child) {
        margin-left: 32px;
      }
      .nav-link {
        @apply text-secondary;
      }
    }
  }
</style>
