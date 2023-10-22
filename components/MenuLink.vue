<template>
  <NuxtLink v-bind="$attrs" class="flex items-center">
    <Icon
      data="@/assets/svgs/icons/hash.svg"
      class="hashtag-link-icon !fill-primary"
    />
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .hashtag-link-icon {
    display: inline;
    width: 14px;
    height: 14px;
  }
</style>
