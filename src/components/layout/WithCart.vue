<template>
  <section class="wrapper">
    <AppHeader></AppHeader>
    <div class="wrapper__content">
      <AppCart/>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppCart from '@/components/AppCart.vue';

export default {
  name: 'WithCart',
  components: {
    AppHeader,
    AppCart,
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
