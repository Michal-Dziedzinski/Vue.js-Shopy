<template>
  <ItemsList/>
</template>

<script>
import ItemsList from '@/components/items/ItemsList.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'HomePage',
  components: {
    ItemsList,
  },
  mounted() {
    console.log(this.$route.params.filter);
    this.SET_QUERY(this.$route.params.filter || '');
  },
  methods: {
    ...mapMutations(['SET_QUERY']),
  },
};
</script>
