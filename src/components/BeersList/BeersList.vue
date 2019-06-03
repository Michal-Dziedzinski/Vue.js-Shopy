<template>
  <article class="list">
    <div class="list__item" v-for="beer in beers" :key="beer.id">
      <BeerItem :beer="beer"/>
    </div>
  </article>
</template>

<script>
import BeerItem from '@/components/BeerItem/BeerItem.vue';

export default {
  name: 'BeersList',
  props: {
    beers: {
      type: Array,
      required: true,
    },
  },
  components: {
    BeerItem,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding-left: 30rem;
  @include respond(big-desktop) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @include respond(tab-port) {
    grid-template-columns: 1fr 1fr;
  }
  @include respond(phone) {
    grid-template-columns: 1fr;
  }
  &__item {
    background-color: $white;
  }
}
</style>
