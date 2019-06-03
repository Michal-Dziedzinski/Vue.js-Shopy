<template>
  <section class="home">
    <Header/>
    <div class="home__content">
      <Cart/>
      <Loader v-if="loading"/>
      <BeersList v-else :beers="beers"/>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import BeersList from '@/components/BeersList/BeersList.vue';
import Cart from '@/components/Cart/Cart.vue';
import Loader from '@/components/UI/Loader/Loader.vue';
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';

const API = 'https://api.punkapi.com/v2/beers';

export default {
  name: 'Home',
  data() {
    return {
      page: 2,
      beers: [],
      loading: true,
    };
  },
  mounted() {
    // eslint-disable-next-line
    // axios.get(`${API}?page=1&per_page=20`).then(response => {
    //   this.beers = response.data;
    //   this.loading = false;
    // });
  },
  methods: {
    infiniteHandler($state) {
      axios.get(`${API}?page=${this.page}&per_page=20`).then(({ data }) => {
        if (data.length) {
          this.page += 1;
          this.beers.push(...data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
  components: {
    Header,
    BeersList,
    Cart,
    InfiniteLoading,
    Loader,
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
