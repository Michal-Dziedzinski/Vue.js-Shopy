<template>
  <section class="home">
    <AppHeader/>
    <div class="home__content">
      <AppCart/>
      <ItemDetails :id="selectedBeer"/>
    </div>
  </section>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import ItemDetails from '@/components/items/item/ItemDetails.vue';
import AppCart from '@/components/layout/AppCart.vue';

export default {
  name: 'ItemPage',
  data() {
    return {
      selectedBeer: null,
    };
  },
  watch: {
    $route: {
      handler: 'onUrlParamsChange',
      immediate: true,
    },
  },
  methods: {
    onUrlParamsChange() {
      this.selectedBeer = this.$router.currentRoute.params.id;
    },
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
.home {
  // padding: 10rem 5rem;
  &__content {
    display: flex;
  }
}
</style>
