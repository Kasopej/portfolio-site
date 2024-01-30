<template>
  <div class="entry border border-solid">
    <h4 class="border-b border-solid">{{ capitalize(title ?? "") }}</h4>
    <p class="text-secondary">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
  import { capitalize } from "vue";
  interface Props {
    title: string;
    content?: string;
  }
  const props = defineProps<Props>();
</script>

<style scoped lang="scss">
  .entry {
    > * {
      padding: 8px;
    }
  }
</style>
