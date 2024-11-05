import { createApp } from "vue"
import { createVfm } from "vue-final-modal"
import router from "./router"
import "primeicons/primeicons.css"
import "vue-final-modal/style.css"
import App from "./App.vue"

const vfm = createVfm()

createApp(App).use(vfm).use(router).mount("#app")
