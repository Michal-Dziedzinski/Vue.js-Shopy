<template>
  <section class="wrapper">
    <AppHeader>
      <SearchItem/>
    </AppHeader>
    <div class="wraper__content">
      <AppCart/>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import SearchItem from '@/components/SearchItem.vue';
import AppCart from '@/components/AppCart.vue';

export default {
  name: 'WithCartAndSearch',
  components: {
    AppHeader,
    AppCart,
    SearchItem,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 10rem 5rem;
  &__content {
    display: flex;
  }
}
</style>
