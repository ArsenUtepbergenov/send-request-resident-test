import { createWebHistory, createRouter } from "vue-router"

import AboutView from "@/views/About.vue"
import ResidentsView from "@/views/Residents.vue"
import EcosystemView from "@/views/Ecosystem.vue"
import PressCenterView from "@/views/PressCenter.vue"
import ContactsView from "@/views/Contacts.vue"

const routes = [
  { path: "/", name: "home", redirect: { name: "ecosystem" } },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      name: "О компании",
    },
  },
  {
    path: "/residents",
    name: "residents",
    component: ResidentsView,
    meta: {
      name: "Резиденты",
    },
  },
  {
    path: "/ecosystem",
    name: "ecosystem",
    component: EcosystemView,
    meta: {
      name: "Экосистема",
    },
  },
  {
    path: "/press-center",
    name: "press-center",
    component: PressCenterView,
    meta: {
      name: "Пресс-центр",
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
    meta: {
      name: "Контакты",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
