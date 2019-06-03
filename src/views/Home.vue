<template>
  <section class="home">
    <Header/>
    <div class="home__content">
      <Cart :beers="beersToBuy" @removeItem="removeItem"/>
      <BeerDetails v-if="selectedBeer" :id="selectedBeer" @addedToCart="sendToCart"/>
      <BeersList v-else/>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import BeersList from '@/components/BeersList/BeersList.vue';
import BeerDetails from '@/components/BeerDetails/BeerDetails.vue';
import Cart from '@/components/Cart/Cart.vue';

export default {
  name: 'Home',
  data() {
    return {
      selectedBeer: null,
      beersToBuy: [],
    };
  },
  watch: {
    $route() {
      this.selectedBeer = this.$router.currentRoute.params.id;
    },
  },
  beforeMount() {
    this.selectedBeer = this.$router.currentRoute.params.id;
  },
  methods: {
    sendToCart(beer) {
      this.beersToBuy.push(beer);
    },
    removeItem(index) {
      this.beersToBuy.splice(index, 1);
    },
  },
  components: {
    Header,
    BeersList,
    Cart,
    BeerDetails,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.home {
  padding: 10rem 5rem;
  &__content {
    display: flex;
  }
}
</style>
