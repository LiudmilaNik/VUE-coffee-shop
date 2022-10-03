import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
// import SecondPage from "../views/SecondPage";

Vue.use(VueRouter);

const routes = [{ path: "/", component: HeroView }];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
