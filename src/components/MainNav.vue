<template>
  <nav class="nav">
    <div class="link-wrapper">
      <RouterLink to="/about" class="link">О компании</RouterLink>
    </div>
    <div class="link-wrapper">
      <RouterLink to="/residents" class="link">Резиденты</RouterLink>
    </div>
    <div class="link-wrapper">
      <RouterLink to="/ecosystem" class="link">Экосистема</RouterLink>
    </div>

    <div class="link-wrapper">
      <RouterLink to="/press-center" class="link">Пресс-центр</RouterLink>
    </div>
    <div class="link-wrapper">
      <RouterLink to="/contacts" class="link">Контакты</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router"
</script>

<style lang="scss">
.nav {
  min-height: 64px;
  background: $bg-header;
  color: $fc-header;
  display: none;
  padding: 0 52px;
  justify-content: space-between;
  gap: 24px;

  .link-wrapper {
    padding: 14px 0;
    border-top: 1px solid #667683;
    flex-grow: 1;
  }

  .link {
    text-decoration: none;
    font-size: 14px;
    line-height: 16px;
    color: white;
    font-weight: 600;
  }

  @media screen and (min-width: $desktop) {
    display: flex;
  }
}
</style>
