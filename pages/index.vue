<template>
  <div class="index-page">
    <Head>
      <Title>MalkovSP</Title>
    </Head>

    <profile-info />

    <profile-portfolio class="index-page__portfolio" />
  </div>
</template>

<script setup>
import ProfileInfo from "@/components/organisms/profile-info.vue";
import ProfilePortfolio from "@/components/organisms/profile-portfolio.vue";
</script>

<style lang="scss" scoped>
.index-page {
  &__portfolio {
    margin-top: 24px;
  }
}
</style>
