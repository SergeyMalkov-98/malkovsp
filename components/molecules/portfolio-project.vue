<template>
  <div class="portfolio-project">
    <project-header
      :icon="project.icon"
      :before-title="project.beforeTitle"
      :title="project.title"
      :subtitle="project.subtitle"
      :company="project.company"
    />

    <p class="portfolio-project__subtitle to-desktop">
      {{ project.subtitle }}
    </p>

    <p class="portfolio-project__description">
      {{ project.description }}
    </p>

    <nuxt-img
      :src="project.projectImage"
      class="portfolio-project__img"
      alt="Иконка проекта"
    />
  </div>
</template>

<script setup>
import ProjectHeader from "@/components/molecules/project-header.vue";

defineProps({
  project: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="scss" scoped>
.portfolio-project {
  &__subtitle {
    color: var(--c-white-500);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    margin-top: 16px;
  }

  &__description {
    font-family: Onest, sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;
    margin-top: 16px;

    @include tablet-up {
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      margin-top: 40px;
    }
  }

  &__img {
    margin-top: 16px;
    width: 100%;
  }
}
</style>
