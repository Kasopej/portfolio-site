<template>
  <header class="flex flex-nowrap w-full items-center mb-12">
    <h2>
      <HashTag>{{ props.title }}</HashTag>
    </h2>
    <hr class="border-primary w-1/2" />
    <slot name="header-append"></slot>
  </header>
</template>

<script setup lang="ts">
  interface Props {
    title: String;
  }
  const props = defineProps<Props>();
</script>

<style scoped></style>
