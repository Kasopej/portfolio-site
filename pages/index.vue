<template>
  <div class="page-root">
    <section class="container !mb-28" id="intro">
      <div class="left">
        <h1 class="heading">
          Kasope is a
          <span class="text-primary">software engineer </span>specialized in
          <span class="text-primary">web frontend development</span>
        </h1>
        <p class="tagline mb-6">
          He crafts responsive web apps where beauty meets resilient solutions
        </p>
        <button class="action px-4 py-2">Contact me</button>
      </div>
      <div class="right">
        <figure>
          <div class="bg-box"></div>
          <figcaption
            class="border border-secondary p-2 flex items-center gap-2"
          >
            <span class="inline-block h-4 w-4 bg-primary"></span>
            Open to new <strong>opportunities</strong>
          </figcaption>
          <Icon
            data="@/assets/svgs/imgs/dots-square.svg"
            class="icon dots !fill-secondary"
            width="84"
            height="84"
          />
        </figure>
      </div>
    </section>
    <section class="container !mb-[74px]" id="quotes">
      <div class="flex flex-col items-end">
        <BlockQuoteBoxed>
          With great power comes great electricity bill
        </BlockQuoteBoxed>
        <p class="border border-secondary p-4">- Dr Who</p>
      </div>
    </section>
    <section class="container flex-col" id="projects">
      <header class="flex flex-nowrap w-full items-center mb-12">
        <h2>
          <HashTag>projects</HashTag>
        </h2>
        <hr class="border-primary w-1/2" />
        <button class="ml-auto">
          View all
          <ArrowRightIcon class="icon" />
        </button>
      </header>
      <div class="flex flex-nowrap w-full">
        <ProjectsItemCard v-for="n in 3" :key="n" class="w-1/3" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped lang="scss">
  .page-root {
    > .container {
      @apply flex m-auto justify-center;
      flex-wrap: nowrap;
    }
  }
  #intro {
    > * {
      flex-basis: auto;
      flex-wrap: nowrap;
      flex-grow: 1;
    }
    > .left {
      width: 60%;
      max-width: 60%;
    }
    > .right {
      figure {
        height: 100%;
        position: relative;
        .bg-box {
          height: 95%;
          background-image: url("@/assets/pngs/developer_hoodie.png");
          background-size: auto;
          background-position: center 0;
          background-repeat: no-repeat;
        }
        .icon.dots {
          position: absolute;
          top: 50%;
          right: 0;
        }
      }
    }
    h1.heading {
      font-size: 32px;
      @apply font-semibold mb-8 mt-8;
    }
    .tagline {
      @apply text-secondary;
    }
    button.action {
      @apply border border-solid border-primary text-contrast;
    }
  }
  #projects {
    h2 {
      line-height: 1;
    }
    hr {
      margin-left: 16px;
    }
  }
</style>
