<template>
  <NuxtLink
    v-bind="$attrs"
    class="flex items-center"
    active-class="!text-contrast"
  >
    <HashTag>
      <template #default>
        <slot></slot>
      </template>
    </HashTag>
  </NuxtLink>
</template>

<script setup lang="ts">
  import { NuxtLinkProps } from "#app";

  interface Props extends /* @vue-ignore */ NuxtLinkProps {}
  const props = defineProps<Props>();
</script>

<style scoped lang="scss">
  .hashtag-link-icon {
    display: inline;
    width: 14px;
    height: 14px;
  }
</style>
