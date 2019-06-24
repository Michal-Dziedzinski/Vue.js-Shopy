<template>
  <div class="item">
    <div class="item__image">
      <ItemImage :src="item.image_url" :alt="item.name"/>
    </div>
    <div class="u-margin-top-small">
      <p class="Paragraph Paragraph--big u-margin-bottom-small">{{item.name}}</p>
      <p class="Paragraph">{{item.tagline}}</p>
    </div>
  </div>
</template>

<script>
import ItemImage from '@/components/ui/ItemImage.vue';

export default {
  name: 'ItemElement',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    ItemImage,
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
