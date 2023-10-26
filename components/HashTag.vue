<template>
  <Icon
    data="@/assets/svgs/icons/hash.svg"
    class="hashtag-link-icon !fill-primary"
  />
  <slot></slot>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .hashtag-link-icon {
    display: inline;
    width: 1em;
    height: 1em;
  }
</style>
