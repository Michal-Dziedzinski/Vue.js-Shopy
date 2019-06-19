<template>
  <article class="list">
    <div class="list__items">
      <div class="list__item" v-for="beer in beers" :key="beer.id">
        <router-link :to="{ name: 'beerDetails', params:{id: beer.id} }">
          <BeerItem :beer="beer"/>
        </router-link>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler">
      <Loader slot="spinner"/>
    </infinite-loading>
  </article>
</template>

<script>
/* eslint-disable */
import BeerItem from '@/components/BeerItem/BeerItem.vue';
import Loader from '@/components/UI/Loader/Loader.vue';
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';
import { mapMutations, mapActions } from 'vuex';

const API = 'https://api.punkapi.com/v2/beers';

export default {
  name: 'BeersList',
  data() {
    return {
      page: 2,
      beers: [],
      allBeers: [],
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  mounted() {
    this.fetchItems({ apiRequest: `${API}?page=1&per_page=20` });
    // axios.get(`${API}?page=1&per_page=20`).then(response => {
    //   this.beers = response.data;
    //   this.allBeers = response.data;
    // });
  },
  methods: {
    infiniteHandler($state) {
      this.fetchItems({ apiRequest: `${API}?page=${this.page}&per_page=20` });
      axios.get(`${API}?page=${this.page}&per_page=20`).then(({ data }) => {
        if (data.length) {
          this.beers.push(...data);
          this.allBeers = [...this.beers];
          this.page += 1;
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    filtered(query) {
      this.beers = this.allBeers;
      this.beers = this.beers.filter(beer =>
        beer.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    ...mapActions(['fetchItems']),
  },
  watch: {
    phraseToFilter(newVal) {
      this.filtered(newVal);
    },
  },
  props: {
    phraseToFilter: String,
  },
  components: {
    BeerItem,
    InfiniteLoading,
    Loader,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.list {
  width: 100%;
  padding-left: 30rem;
  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    // padding-left: 30rem;
    @include respond(big-desktop) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @include respond(tab-port) {
      grid-template-columns: 1fr 1fr;
    }
    @include respond(phone) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    background-color: $white;
    cursor: pointer;
  }
}
</style>
