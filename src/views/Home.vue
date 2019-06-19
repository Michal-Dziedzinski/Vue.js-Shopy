<template>
  <section class="home">
    <Header @searchedPhrase="setPhrase"/>
    <div class="home__content">
      <Cart />
      <BeersList :phraseToFilter="phraseToFilter"/>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import BeersList from '@/components/BeersList/BeersList.vue';
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
    BeersList,
    Cart,
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
