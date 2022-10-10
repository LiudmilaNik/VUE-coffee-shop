import Vue from "vue";
import Vuex from "vuex";

import links from "./links";
import goods from "./goods";
import coffee from "./coffee";
import bestellers from "./bestsellers";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    bestellers,
    coffee,
    goods,
  },
});

export default store;
