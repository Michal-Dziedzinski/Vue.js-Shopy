<template>
  <h1 class="heading">
    <router-link to="/" class="heading__link" exact>{{logoText}}</router-link>
  </h1>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    logoText: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.heading {
  padding: 0 2rem;
  &__link {
    color: $light-text;
  }
}
</style>
