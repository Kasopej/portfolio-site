<template>
  <div class="border border-secondary relative p-6">
    <slot></slot>
    <Icon
      original
      data="@/assets/svgs/icons/block-qte-left.svg"
      class="absolute !-top-2 left-[30px]"
    />
    <Icon
      original
      data="@/assets/svgs/icons/block-qte-left.svg"
      class="absolute -bottom-2 right-[30px]"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
