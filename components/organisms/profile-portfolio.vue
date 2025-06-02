<template>
  <div class="profile-portfolio">
    <p class="profile-portfolio__subtitle">В настоящее время</p>

    <portfolio-item
      v-for="portfolio in PORTFOLIO_ITEMS"
      :key="portfolio.id"
      :item="portfolio"
    />
  </div>
</template>

<script setup>
import PortfolioItem from "@/components/molecules/portfolio-item.vue";

const PORTFOLIO_ITEMS = [
  {
    id: "1",
    icon: "projects/icons/srf.svg",
    projectImage: "projects/images/srf.png",
    beforeTitle: "MVP и развитие продукта",
    title: "Портал Ассоциации развития фигурного катания",
    subtitle: "Web /\ Mobile",
    company: "Smart TS",
    link: {
      path: "https://xn--80adaks1accdqj2p.xn--p1ai/",
      name: "Соревнования.рф",
      label: "Перейти на сайт",
      icon: "srf",
    },
    description:
      "Был спроектирован портал, который послужил единой площадкой для тысяч спортсменов и оргназиаций, в сфере любительского фигурного катания. Основной задачей было решить проблему отсутствия единого механизма для проведения соревнований. А так же создать легкий доступ людей к данному виду спорта",
  },
  {
    id: "2",
    icon: "projects/icons/tricolor.svg",
    projectImage: "projects/images/tricolor.png",
    beforeTitle: "MVP и развитие продукта",
    title: "Развитие личных кабинетов «Триколор»",
    subtitle: "Web /\ Mobile",
    company: "Smart TS",
    description:
      "Был спроектирован портал, который послужил единой площадкой для тысяч спортсменов и оргназиаций, в сфере любительского фигурного катания. Основной задачей было решить проблему отсутствия единого механизма для проведения соревнований. А так же создать легкий доступ людей к данному виду спорта",
  },
  {
    id: "3",
    icon: "projects/icons/mtt.svg",
    projectImage: "projects/images/mtt.png",
    beforeTitle: "MVP и развитие продукта",
    title: "ЕОКЦ Единое окно",
    subtitle: "Web",
    company: "Smart TS",
    description:
      "Был спроектирован портал, который послужил единой площадкой для тысяч спортсменов и оргназиаций, в сфере любительского фигурного катания. Основной задачей было решить проблему отсутствия единого механизма для проведения соревнований. А так же создать легкий доступ людей к данному виду спорта",
  },
  {
    id: "4",
    icon: "projects/icons/sts.svg",
    projectImage: "projects/images/sts.png",
    beforeTitle: "MVP и развитие продукта",
    title: "Офицальный сайт «Смарт Тим Сервис»",
    subtitle: "Web /\ Mobile",
    company: "Smart TS",
    link: {
      path: "https://smart-ts.ru/",
      name: "Smart-ts.ru",
      label: "Перейти на сайт",
      icon: "sts",
    },
    description:
      "Был спроектирован портал, который послужил единой площадкой для тысяч спортсменов и оргназиаций, в сфере любительского фигурного катания. Основной задачей было решить проблему отсутствия единого механизма для проведения соревнований. А так же создать легкий доступ людей к данному виду спорта",
  },
];
</script>

<style lang="scss" scoped>
.profile-portfolio {
  &__subtitle {
    color: var(--c-white-500);
    font-size: 12px;
    font-weight: 300;
    line-height: 15px;
    margin: 24px auto;
    text-align: center;

    @include tablet-up {
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      margin: 40px auto;
    }
  }
}
</style>
