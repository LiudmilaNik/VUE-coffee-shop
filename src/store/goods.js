const goods = {
  state: {
    goods: [
      {
        id: 0,
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brasil",
        price: 10.73,
      },
      {
        id: 1,
        image: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brasil",
        price: 15.99,
      },
      {
        id: 2,
        image: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brasil",
        price: 6.99,
      },
      {
        id: 3,
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brasil",
        price: 10.73,
      },
      {
        id: 4,
        image: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brasil",
        price: 15.99,
      },
      {
        id: 5,
        image: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brasil",
        price: 6.99,
      },
    ],
  },
  mutations: {
    setGoodsData(state, data) {
      console.log(data);
      state.goods = data;
    },
  },
  actions: {
    setGoodsData({ commit }, data) {
      commit("setGoodsData", data);
    },
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
  },
};

export default goods;
