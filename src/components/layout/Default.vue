<template>
  <section class="wrapper">
    <AppHeader></AppHeader>
    <slot></slot>
  </section>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'Default',
  components: {
    AppHeader,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 10rem 5rem;
  min-height: 100vh;
}
</style>
