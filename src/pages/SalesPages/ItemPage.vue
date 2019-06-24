<template>
  <div class="item">
    <AppHeader/>
    <main class="item__content">
      <AppCart/>
      <ItemDetails :item="item" :loading="loading"/>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import ItemDetails from '@/components/items/item/ItemDetails.vue';
import AppCart from '@/components/layout/AppCart.vue';
import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers';

export default {
  name: 'ItemPage',
  data() {
    return {
      item: null,
      loading: true,
    };
  },
  props: {
    // FIXME:
    id: [String, Number],
  },
  mounted() {
    // eslint-disable-next-line
    axios.get(`${API}/${this.id}`).then((response) => {
      [this.item] = response.data;
      this.loading = false;
    });
  },
  components: {
    AppHeader,
    AppCart,
    ItemDetails,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.item {
  padding: 10rem 5rem;
  &__content {
    display: flex;
  }
}
</style>
