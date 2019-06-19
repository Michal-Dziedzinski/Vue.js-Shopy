<template>
  <section class="home">
    <Header @searchedPhrase="setPhrase"/>
    <div class="home__content">
      <Cart/>
      <BeerDetails :id="selectedBeer"/>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import BeerDetails from '@/components/BeerDetails/BeerDetails.vue';
import Cart from '@/components/Cart/Cart.vue';

export default {
  name: 'Home',
  data() {
    return {
      selectedBeer: null,
      beersToBuy: [],
      phraseToFilter: '',
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
    // sendToCart(beer) {
    //   this.beersToBuy.push(beer);
    // },
    // removeItem(index) {
    //   this.beersToBuy.splice(index, 1);
    // },
    setPhrase(phrase) {
      this.phraseToFilter = phrase;
    },
  },
  components: {
    Header,
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
