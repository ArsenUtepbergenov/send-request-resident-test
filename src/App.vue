<template>
  <div>
    <Header />
    <MainNav />
    <Breadcrumbs />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router"
import Header from "./components/Header.vue"
import MainNav from "./components/MainNav.vue"
import Breadcrumbs from "./components/Breadcrumbs.vue"
import Footer from "./components/Footer.vue"
</script>

<style lang="scss"></style>
