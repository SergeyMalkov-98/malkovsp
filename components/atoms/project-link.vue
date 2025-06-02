<template>
  <a class="project-link" :href="href" v-bind="$attrs">
    <i :class="`icon-${icon} project-link__icon`" />
    <div class="project-link__wrapper">
      <span class="project-link__label">
        <slot name="label" />
      </span>
      <span class="project-link__name">
        <slot />
      </span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.project-link {
  align-items: center;
  background: var(--c-white-100);
  border-radius: 14px;
  color: var(--c-black-100);
  display: flex;
  padding: 12px;
  transition: color 0.3s, background-color 0.3s;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: var(--c-white-300);
  }

  &:active {
    background: var(--c-white-200);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__icon {
    margin-right: 8px;
    text-align: center;
    font-size: 20px;
    width: 32px;
  }

  &__label {
    font-size: 9px;
    font-weight: 400;
    line-height: 12px;
  }

  &__name {
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
  }
}
</style>
