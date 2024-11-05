<template>
  <div class="breadcrumbs">
    <RouterLink to="/" class="link">Главная</RouterLink>
    <span class="dot">
      <i class="pi pi-circle-fill" style="font-size: 2px"></i>
    </span>
    <span class="current-route">{{ currentRoute }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { RouterLink, useRoute } from "vue-router"

const route = useRoute()
const currentRoute = ref("")

watch(
  route,
  (value) => {
    currentRoute.value = value.meta.name
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;
  gap: 8px;

  @media screen and (max-width: $mobile) {
    padding: 0 16px;
    margin-top: 24px;
    margin-bottom: 52px;
  }

  @media screen and (min-width: $min-tablet) {
    padding: 0 40px;
    margin-top: 24px;
    margin-bottom: 42px;
  }

  @media screen and (min-width: $desktop) {
    padding: 0 52px;
    margin-top: 25px;
    margin-bottom: 75px;
  }

  .current-route,
  .link {
    font-family: "Manrope", sans-serif;
    text-decoration: none;
    color: #1a263d;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  .current-route {
    color: #68789c;
  }

  .dot {
    display: flex;
    align-items: center;
  }
}
</style>
