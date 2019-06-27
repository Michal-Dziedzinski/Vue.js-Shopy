<template>
  <ItemsList :availableItems="availableItems">
    <InfiniteLoading @infinite="infiniteHandler">
      <AppLoader slot="spinner"/>
    </InfiniteLoading>
  </ItemsList>
</template>

<script>
import ItemsList from '@/components/items/ItemsList.vue';
// eslint-disable-next-line
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex';
import InfiniteLoading from 'vue-infinite-loading';
import AppLoader from '@/components/ui/AppLoader.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    ItemsList,
    InfiniteLoading,
    AppLoader,
  },
  beforeMount() {
    this.REMOVE_ITEMS_FROM_LIST();
  },
  mounted() {
    this.SET_QUERY(this.$route.query.name || '');
    this.fetchItems(1).then(() => {
      this.isLoading = false;
    });
  },
  computed: {
    availableItems() {
      return this.getFilteredItems.filter(
        // eslint-disable-next-line
        (item) => !this.cartItemsIds.includes(item.id)
      );
    },
    ...mapState(['itemsFragment', 'page', 'allItems', 'cartItemsIds']),
    ...mapGetters(['getFilteredItems']),
  },
  methods: {
    async infiniteHandler($state) {
      await this.fetchItems(this.page).then(() => {
        if (this.itemsFragment.length) {
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    ...mapActions(['fetchItems']),
    ...mapMutations(['REMOVE_ITEMS_FROM_LIST', 'SET_QUERY']),
  },
};
</script>
