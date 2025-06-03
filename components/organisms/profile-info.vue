<template>
  <div class="profile-info">
    <nuxt-img
      src="developer.jpg"
      class="profile-info__img"
      width="84"
      height="84"
      alt="Портрет разработчика"
    />

    <h1 class="profile-info__title">Мальков Сергей</h1>
    <h1 class="profile-info__subtitle">Middle Frontend Developer</h1>
    <p class="profile-info__summary">
      Я — passionate frontend разработчик, создающий современные, удобные и эстетичные
      веб-интерфейсы. Моя миссия — превращать идеи в интерактивные решения, радующие глаз
      и обеспечивающие отличный пользовательский опыт.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.profile-info {
  align-items: center;
  display: flex;
  flex-direction: column;

  &__img {
    border-radius: 14px;
    filter: grayscale(1);
    margin-bottom: 16px;
  }

  &__title {
    color: var(--c-black-100);
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 16px;
    white-space: pre;
  }

  &__subtitle {
    color: var(--c-white-500);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-bottom: 24px;
  }

  &__summary {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    text-align: center;
    max-width: 350px;

    @include tablet-up {
      font-size: 20px;
      line-height: 24px;
      max-width: unset;
    }
  }
}
</style>
