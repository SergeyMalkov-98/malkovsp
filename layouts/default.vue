<template>
  <div class="default-layout">
    <app-header />
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
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  position: relative;
  width: 100%;

  @include tablet-up {
    --container-padding: 0;
  }

  &__main {
    padding-top: 24px;

    @include mobile-up {
      padding-top: 40px;
    }
  }
}
</style>
