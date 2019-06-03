<template>
  <div class="item">
    <div class="item__image">
      <BeerImage :src="beer.image_url" :alt="beer.name"/>
    </div>
    <div class="u-margin-top-small">
      <p class="Paragraph Paragraph--big u-margin-bottom-small">{{beer.name}}</p>
      <p class="Paragraph">{{beer.tagline}}</p>
    </div>
  </div>
</template>

<script>
import BeerImage from '@/components/UI/BeerImage/BeerImage.vue';

export default {
  name: 'BeerItem',
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
  components: {
    BeerImage,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.item {
  background-color: $white;
  padding: 2.5rem 1rem;
  color: $light-text;
  &__image {
    padding: 0.5rem 0;
    @include center;
  }
}
</style>
