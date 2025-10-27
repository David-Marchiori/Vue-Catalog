import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Details from "../views/Details.vue";
import Favorites from "../views/Favorites.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/details", name: "Details", component: Details },
  { path: "/favorites", name: "Favorites", component: Favorites },
  // { path: "/404", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
