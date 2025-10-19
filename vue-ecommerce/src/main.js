import { createApp } from "vue";
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import router from "./router";
import "./style.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(pinia);
app.use(router);
app.mount("#app");
