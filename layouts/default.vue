<template>
  <div class="default-layout">
    <app-header />

    <button type="button" class="default-layout__arrow-up mobile-up" @click="scrollToTop">
      <i class="icon-arrow-up" />
    </button>

    <div class="app-container">
      <main class="default-layout__main">
        <slot />
      </main>

      <app-footer />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/components/organisms/app-header.vue";

import AppFooter from "@/components/organisms/app-footer.vue";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  position: relative;
  width: 100%;

  @include tablet-up {
    --container-padding: 0;
  }

  &__arrow-up {
    background: var(--c-white-100);
    border-radius: 14px;
    bottom: 8px;
    position: fixed;
    right: 60px;
    transition: background 0.3s;

    @include tablet-only {
      right: 8px;
    }

    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    font-size: 30px;
    display: flex;
    padding: 20px;

    &:hover {
      background: var(--c-white-200);
    }

    &:active {
      background: var(--c-white-300);
      color: var(--c-red-200);
    }
  }

  &__main {
    padding-top: 24px;

    @include mobile-up {
      padding-top: 40px;
    }
  }
}
</style>
