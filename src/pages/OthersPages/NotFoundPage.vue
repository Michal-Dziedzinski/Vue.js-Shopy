<template>
  <section>
    <AppHeader/>
    <h2 class="HeadingSecondary u-margin-bottom-medium">Page Not Found</h2>
  </section>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue';

export default {
  name: 'NotFoundPage',
  components: {
    AppHeader,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
</style>
