<template>
  <article class="list">
    <div class="list__items">
      <div class="list__item" v-for="item in availableItems" :key="item.id">
        <router-link :to="{ name: 'itemPage', params:{id: item.id} }">
          <ItemElement :item="item"/>
        </router-link>
      </div>
    </div>
    <InfiniteLoading @infinite="infiniteHandler">
      <AppLoader slot="spinner"/>
    </InfiniteLoading>
  </article>
</template>

<script>
import ItemElement from '@/components/items/item/ItemElement.vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import InfiniteLoading from 'vue-infinite-loading';
import { mapMutations, mapActions, mapState } from 'vuex';

export default {
  name: 'ItemsList',
  computed: {
    availableItems() {
      return this.allItems.filter(
        // eslint-disable-next-line
        (item) => !this.cartItemsIds.includes(item.id)
      );
    },
    ...mapState(['items', 'page', 'allItems', 'cart', 'cartItemsIds']),
  },
  mounted() {
    this.fetchItems(1);
  },
  beforeDestroy() {
    this.REMOVE_ITEMS_FROM_LIST();
  },
  methods: {
    async infiniteHandler($state) {
      await this.fetchItems(this.page).then(() => {
        if (this.items.length) {
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    ...mapActions(['fetchItems']),
    ...mapMutations(['REMOVE_ITEMS_FROM_LIST']),
  },
  components: {
    ItemElement,
    InfiniteLoading,
    AppLoader,
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
