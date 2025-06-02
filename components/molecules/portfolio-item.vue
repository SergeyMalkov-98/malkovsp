<template>
  <div class="portfolio-item">
    <portfolio-project :project="item" />

    <project-link
      :href="link.path"
      :icon="link.icon"
      v-if="link"
      target="_blank"
      class="portfolio-item__link"
    >
      <template #label>
        {{ link.label }}
      </template>

      {{ link.name }}
    </project-link>
  </div>
</template>

<script setup>
import PortfolioProject from "@/components/molecules/portfolio-project.vue";
import ProjectLink from "@/components/atoms/project-link.vue";

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
});

const link = computed(() => props.item?.link);
</script>

<style lang="scss" scoped>
.portfolio-item {
  background: var(--c-white-200);
  border-radius: 14px;
  padding: 16px;

  &:not(&:last-child) {
    margin-bottom: 24px;

    @include tablet-up {
      margin-bottom: 40px;
    }
  }

  @include tablet-up {
    padding: 40px;
  }

  &__link {
    margin-top: 16px;

    @include tablet-up {
      margin-top: 40px;
    }
  }
}
</style>
