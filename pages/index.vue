<script lang="ts" setup></script>

<template>
  <div class="page-root">
    <section class="container intro">
      <div class="left">
        <h1 class="heading">
          Kasope is a
          <span class="text-primary">software engineer </span>specialized in
          <span class="text-primary">web frontend development</span>
        </h1>
        <p class="tagline mb-6">
          He crafts responsive web apps where beauty meets resilient solutions
        </p>
        <button class="action px-4 py-2">Contact me!!</button>
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
            class="icon dots fill-secondary"
            width="84"
            height="84"
          />
        </figure>
      </div>
    </section>
    <section class="container"></section>
    <section class="container"></section>
  </div>
</template>

<style scoped lang="scss">
  .page-root {
    > .container {
      @apply flex m-auto;
      flex-wrap: nowrap;
    }
  }
  .intro {
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
          background-position: 90% 20%;
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
</style>
