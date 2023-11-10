<template>
  <article class="border border-secondary">
    <figure class="item-img-top w-full">
      <img class="w-full" src="@/assets/pngs/developer_hoodie.png" alt="" />
      <figcaption
        class="w-full text-secondary border-secondary border-t border-b p-2"
      >
        Paysurge app
      </figcaption>
    </figure>
    <div class="item-body w-full p-4">
      <h3>Paysure App</h3>
      <p class="!mb-4">Lorem ipsum lorem ipsum</p>
      <div class="flex gap-x-4 flex-wrap">
        <button class="border border-primary btn">Live <TildeArrow /></button>
        <button class="border border-secondary text-secondary btn">
          Cached
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .btn {
    @apply px-4 py-2;
  }
</style>
