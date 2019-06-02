<template>
  <h1>{{logoText}}</h1>
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
h1 {
  color: $accent;
}
</style>
