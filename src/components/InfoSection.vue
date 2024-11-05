<template>
  <section class="info-section container">
    <h1 class="heading">{{ heading }}</h1>
    <Divider :height="2" :margin="[11, 24]" />
    <article class="content">
      {{ content }}
    </article>
  </section>
</template>

<script setup>
import Divider from "./Divider.vue"

defineProps({
  heading: {
    type: String,
    default: "Заголовок...",
  },
  content: {
    type: String,
    default: "Контент...",
  },
})
</script>

<style lang="scss">
.info-section {
  .heading {
    font-size: 32px;
    line-height: 38px;
    font-weight: 400;
    color: #3a4854;
    margin-bottom: 0;
  }

  .content {
    font-size: 16px;
    line-height: 26px;
    color: #1a263d;
  }

  @media screen and (max-width: $mobile) {
    padding: 0 16px;
  }

  @media screen and (min-width: $min-tablet) {
    padding: 0 40px;
  }

  @media screen and (min-width: $desktop) {
    padding: 0 52px;
  }
}
</style>
