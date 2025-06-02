<template>
  <div class="app-footer">
    <div class="app-footer__executive">
      Developed by
      <a href="https://t.me/MalkovSP98" class="app-footer__person" target="_blank">
        MalkovSP98
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-footer {
  margin: 24px 0;
  display: flex;
  justify-content: center;

  @include tablet-up {
    margin: 40px 0;
  }

  &__executive {
    color: var(--c-white-500);
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
  }

  &__person {
    color: var(--c-black-100);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-decoration: none;
  }
}
</style>
