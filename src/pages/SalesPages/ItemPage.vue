<template>
  <ItemDetails :item="item" :loading="loading"/>
</template>

<script>
import ItemDetails from '@/components/items/item/ItemDetails.vue';
import { getItem } from '@/api';

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
    [this.item] = await getItem(this.id).then((this.loading = false));
  },
  components: {
    ItemDetails,
  },
};
</script>
