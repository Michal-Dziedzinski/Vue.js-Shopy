<template>
  <section class="home">
    <Header/>
    <div class="home__content">
      <Cart/>
      <BeersList :beers="beers"/>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import BeersList from '@/components/BeersList/BeersList.vue';
import Cart from '@/components/Cart/Cart.vue';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      beers: [],
    };
  },
  mounted() {
    // eslint-disable-next-line
    axios.get('https://api.punkapi.com/v2/beers').then(response => {
      this.beers = response.data;
    });
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
