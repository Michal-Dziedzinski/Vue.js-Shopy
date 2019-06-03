<template>
  <section class="home">
    <Header/>
    <div class="home__content">
      <Cart/>
      <BeersList/>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import BeersList from '@/components/BeersList/BeersList.vue';
import Cart from '@/components/Cart/Cart.vue';

export default {
  name: 'Home',
  components: {
    Header,
    BeersList,
    Cart,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.home {
  padding: 10rem 5rem;
  &__content {
    display: flex;
  }
}
</style>
