import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import ForYourPleasure from "../views/ForYourPleasure";
import ContactUs from "../views/ContactUs";
import ThankYou from "../views/ThankYou";
import GoodsItem from "../views/GoodsItem";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/your-pleasure", component: ForYourPleasure },
  { path: "/contact-us", component: ContactUs },
  { path: "/thank-you", component: ThankYou },
  { name: "coffee", path: "/our-coffee/:id", component: GoodsItem },
  { name: "goods", path: "/your-pleasure/:id", component: GoodsItem },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
