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
      "Был разработан портал, который послужил единой площадкой для тысяч спортсменов и организаций, в сфере любительского фигурного катания. Основной задачей было решить проблему отсутствия единого механизма для проведения соревнований. А так же создать легкий доступ людей к данному виду спорта.",
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
      "Была разработана система личных кабинетов «Триколор», которая стала удобной платформой для миллионов пользователей. Основной задачей было обеспечить безопасный и быстрый доступ к услугам, а также упростить управление подписками и настройками. Благодаря внедрению личных кабинетов, пользователи получили возможность легко контролировать свои тарифы, просматривать историю платежей и получать персонализированные рекомендации, что значительно повысило качество обслуживания и сделало взаимодействие с сервисом более комфортным.",
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
      "Единое окно по работе с клиентами было создано для того, чтобы сделать взаимодействие максимально простым, быстрым и удобным. Его главная цель — объединить все коммуникационные каналы и инструменты в единую платформу, чтобы клиенты могли получать поддержку и решать свои вопросы без лишних усилий и задержек. Благодаря этому решению, обслуживание становится более оперативным и персонализированным, а доверие и удовлетворенность клиентов значительно растут.",
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
      name: "Смарт тим сервис.ру",
      label: "Перейти на сайт",
      icon: "sts",
    },
    description:
      "Лендинг для компании был разработан с целью эффективно представить ее уникальные преимущества и ключевые предложения потенциальным клиентам. Основной задачей было создать привлекательную и информативную платформу, которая бы быстро захватывала внимание посетителей.",
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
