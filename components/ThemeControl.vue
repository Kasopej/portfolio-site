<template>
  <button @click="toggleUserTheme">
    <MoonIcon v-if="userStore.themePreference === 'dark'" class="icon" />
    <SunIcon v-else class="icon" />
  </button>
</template>

<script lang="ts" setup>
  import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
  const userStore = useUserStore();

  function toggleUserTheme() {
    userStore.setUserThemePreference(
      userStore.themePreference === "dark" ? "light" : "dark"
    );
  }
</script>

<style scoped lang="scss">
  .icon {
    position: relative;
    top: 2px;
    width: 16px;
    height: 16px;
  }
</style>
