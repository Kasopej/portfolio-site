<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { polyfillCanvas2dContext } from "./utils/polyfills";

  polyfillCanvas2dContext();
</script>
<style lang="scss">
  @import "styles/scss/icons";
</style>
