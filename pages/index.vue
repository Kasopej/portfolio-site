<template>
  <div class="page-root">
    <section class="container !mb-28 gap-4" id="intro">
      <div class="w-3/5 left-side">
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
      <div class="right-side">
        <figure class="h-full relative">
          <CanvasPlotter
            class="absolute top-4 left-0 z-0"
            width="150"
            height="150"
            plot-type="line"
            draw-type="stroke"
            stroke-color="rgb(199 120 221)"
            :vectors="vectorsForCanvas"
          />
          <div class="bg-box relative z-10"></div>
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
    <section class="container flex-col !mb-[106px]" id="projects">
      <SectionHeading title="projects">
        <template #header-append>
          <button class="ml-auto">
            View all
            <ArrowRightIcon class="icon" />
          </button>
        </template>
      </SectionHeading>
      <div class="flex flex-wrap w-full">
        <ProjectsItemCard
          v-for="n in 3"
          :key="n"
          class="w-full sm:w-1/3 grow"
        />
      </div>
    </section>
    <section class="container flex-col !mb-[106px]" id="skills">
      <SectionHeading title="skills"> </SectionHeading>
      <div class="w-full flex flex-wrap">
        <figure class="w-full md:w-2/5 grid grid-cols-2">
          <div class="h-[400px]">
            <Icon
              data="@/assets/svgs/imgs/dots-square.svg"
              class="icon dots !fill-secondary"
              width="63"
              height="63"
            />
          </div>
          <div class="h-[300px]">
            <Icon
              data="@/assets/svgs/imgs/dots-square.svg"
              class="icon dots !fill-secondary"
              width="63"
              height="63"
            />
          </div>
        </figure>
        <div class="w-full md:w-3/5 flex gap-3">
          <div class="skill-column">
            <SkillsBox title="languages" class="mb-2" />
          </div>
          <div class="skill-column">
            <SkillsBox title="databases" class="mb-2" />
            <SkillsBox title="other" class="mb-2" />
          </div>
          <div class="skill-column">
            <SkillsBox title="tools" class="mb-2" />
            <SkillsBox title="frameworks" class="mb-2" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import { ArrowRightIcon } from "@heroicons/vue/24/outline";
  import { vectorsForCanvas } from "@/constants/canvas";
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
    .icon.dots {
      position: absolute;
      top: 50%;
      right: 0;
    }
  }

  .bg-box {
    height: 95%;
    background-image: url("@/assets/pngs/developer_hoodie.png");
    background-size: auto;
    background-position: center 0;
    background-repeat: no-repeat;
  }
  h1.heading {
    @apply font-semibold mb-8 mt-8 text-[32px];
  }
  .tagline {
    @apply text-secondary;
  }
  button.action {
    @apply border border-solid border-primary text-contrast;
  }
  .skill-column {
    @apply w-1/3;
  }
</style>
