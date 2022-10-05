<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <BestComponent
                classItem="shop__item"
                :name="goods[0].name"
                :country="goods[0].country"
                :price="goods[0].price"
                :image="goods[0].image"
              />
              <BestComponent
                classItem="shop__item"
                :name="goods[1].name"
                :country="goods[1].country"
                :price="goods[1].price"
                :image="goods[1].image"
              />
              <BestComponent
                classItem="shop__item"
                :name="goods[2].name"
                :country="goods[2].country"
                :price="goods[2].price"
                :image="goods[2].image"
              />
              <BestComponent
                classItem="shop__item"
                :name="goods[3].name"
                :country="goods[3].country"
                :price="goods[3].price"
                :image="goods[3].image"
              />
              <BestComponent
                classItem="shop__item"
                :name="goods[4].name"
                :country="goods[4].country"
                :price="goods[4].price"
                :image="goods[4].image"
              />
              <BestComponent
                classItem="shop__item"
                :name="goods[5].name"
                :country="goods[5].country"
                :image="goods[5].image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import BestComponent from "@/components/BestComponent.vue";

export default {
  components: { NavBarComponent, BestComponent },
  data() {
    return {
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
    };
  },
};
</script>
