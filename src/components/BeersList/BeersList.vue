<template>
  <article class="list">
    <div class="list__items">
      <div class="list__item" v-for="item in availableItems" :key="item.id">
        <router-link :to="{ name: 'beerDetails', params:{id: item.id} }">
          <BeerItem :beer="item"/>
        </router-link>
      </div>
    </div>
    <InfiniteLoading @infinite="infiniteHandler">
      <Loader slot="spinner"/>
    </InfiniteLoading>
  </article>
</template>

<script>
/* eslint-disable */
import BeerItem from '@/components/BeerItem/BeerItem.vue';
import Loader from '@/components/UI/Loader/Loader.vue';
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';
import { mapMutations, mapActions, mapState } from 'vuex';

const API = 'https://api.punkapi.com/v2/beers';

export default {
  name: 'BeersList',
  data() {
    return {
      allBeers: [],
    };
  },
  computed: {
    availableItems() {
      this.allItems.filter((item) => this.cartItemsIds.includes(item.id));
    },
    ...mapState(['items', 'page', 'allItems', 'cart', 'cartItemsIds']),
  },
  mounted() {
    this.fetchItems({ apiRequest: `${API}?page=1&per_page=20` });
  },
  beforeDestroy() {
    // console.log('destroy');
    this.REMOVE_ITEM_FROM_LIST();
  },
  methods: {
    async infiniteHandler($state) {
      await this.fetchItems({
        apiRequest: `${API}?page=${this.page}&per_page=20`,
      }).then(() => {
        if (this.items.length) {
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    filtered(query) {
      this.beers = this.allBeers;
      this.beers = this.beers.filter((beer) =>
        beer.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    isHide(id) {
      return !this.cartItemsIds.includes(id);
    },
    ...mapActions(['fetchItems']),
    ...mapMutations(['REMOVE_ITEM_FROM_LIST']),
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
