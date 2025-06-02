<template>
  <div class="ui-badge">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui-badge {
  background: #93beff;
  border-radius: 6px;
  color: var(--c-white-100);
  font-family: Onest, sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 13px;
  padding: 4px 8px;
  white-space: nowrap;
  width: -moz-fit-content;
  width: fit-content;
}
</style>
