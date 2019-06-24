<template>
  <ItemDetails :item="item" :loading="loading"/>
</template>

<script>
import ItemDetails from '@/components/items/item/ItemDetails.vue';
import axios from 'axios';
import getSingleBeer from '@/api';

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
    id: [String, Number],
  },
  async mounted() {
    // eslint-disable-next-line
    await console.log(getSingleBeer(this.id));
    axios.get(`${API}/${this.id}`).then((response) => {
      [this.item] = response.data;
      this.loading = false;
    });
  },
  components: {
    ItemDetails,
  },
};
</script>
