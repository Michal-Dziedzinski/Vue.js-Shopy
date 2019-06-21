<template>
  <section class="home">
    <AppHeader>
      <SearchItem/>
    </AppHeader>
    <div class="home__content">
      <AppCart/>
      <ItemsList/>
    </div>
  </section>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import SearchItem from '@/components/SearchItem.vue';
import ItemsList from '@/components/items/ItemsList.vue';
import AppCart from '@/components/layout/AppCart.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    ItemsList,
    AppCart,
    SearchItem,
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
