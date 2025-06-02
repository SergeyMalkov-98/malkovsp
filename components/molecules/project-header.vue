<template>
  <div class="project-header">
    <nuxt-img
      :src="icon"
      class="project-header__img"
      width="48"
      height="48"
      alt="Иконка проекта"
    />
    <div class="project-header__wrapper">
      <div class="project-header__titles">
        <span class="project-header__beforeTitle">{{ beforeTitle }}</span>
        <h3 class="project-header__title">{{ title }}</h3>

        <p class="project-header__subtitle tablet-up">{{ subtitle }}</p>
      </div>

      <ui-badge>
        {{ company }}
      </ui-badge>
    </div>
  </div>
</template>

<script setup>
import UiBadge from "@/components/ui/ui-badge.vue";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  beforeTitle: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  company: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.project-header {
  align-items: center;
  display: flex;

  @include tablet-up {
    align-items: flex-start;
  }

  &__img {
    margin-right: 8px;

    @include tablet-up {
      height: 68px;
      margin-right: 24px;
      width: 68px;
    }
  }

  &__wrapper {
    width: 100%;
    display: flex;
    align-items: self-start;
    justify-content: space-between;
  }

  &__titles {
    display: flex;
    flex-direction: column;
  }

  &__beforeTitle {
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;

    @include tablet-up {
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
    }
  }

  &__title {
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;

    @include tablet-up {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
    }
  }

  &__subtitle {
    margin-top: 10px;
    color: var(--c-white-500);
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }
}
</style>
