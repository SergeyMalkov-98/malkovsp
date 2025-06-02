<template>
  <header class="app-header">
    <div class="app-header__wrapper">
      <div class="app-header__links">
        <a
          v-for="link in links"
          :key="link.path"
          :href="link.path"
          target="_blank"
          class="app-header__link"
        >
          <i :class="`icon-${link.icon}`" />
        </a>
      </div>
      <div class="app-header__actions">
        <a
          class="app-header__cv"
          href="malkovsp.pdf"
          download="malkovsp.pdf"
          target="_blank"
        >
          <i class="icon-download app-header__cv-icon" />
          Скачать CV
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const links = [
  {
    path: "https://m.vk.com/id378250013",
    icon: "vk",
  },
  {
    path: "https://t.me/MalkovSP98",
    icon: "telegram",
  },
  {
    path: "https://github.com/SergeyMalkov-98",
    icon: "github",
  },
];
</script>

<style lang="scss" scoped>
.app-header {
  padding: 10px 16px;
  position: sticky;
  top: 0;
  z-index: 1;

  @include to-desktop {
    background: var(--c-white-100);
  }

  @include tablet-up {
    padding: 48px 60px 0;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    align-items: center;
  }

  &__link {
    font-size: 22px;
    padding: 8px;
    display: flex;
    transition: color 0.3s, background-color 0.3s;
    cursor: pointer;

    &:not(&:last-child) {
      margin-right: 4px;
    }

    color: var(--c-black-100);

    &:hover {
      color: var(--c-red-100);
    }
    &:active {
      color: var(--c-red-200);
    }
  }

  &__actions {
    display: flex;
  }

  &__cv {
    background: var(--c-black-200);
    color: var(--c-white-100);
    border-radius: 12px;

    cursor: pointer;

    transition: color 0.3s, background-color 0.3s;

    font-size: 11px;
    font-weight: 500;
    line-height: 14px;
    padding: 12px;

    @include tablet-up {
      font-size: 16px;
      font-weight: 500;
      line-height: 21px;
      padding: 12px 24px;
    }

    &:hover {
      background: var(--c-red-100);
    }

    &:active {
      background: var(--c-red-200);
    }
  }

  &__cv-icon {
    margin-right: 4px;
  }
}
</style>
