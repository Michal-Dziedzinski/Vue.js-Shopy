<template>
  <img :class="big ? 'image--big' : 'image'" :src="src ? src : questionMark" :alt="alt">
</template>

<script>
import questionMark from '@/assets/images/questionMark.png';

export default {
  name: 'ItemImage',
  data() {
    return {
      questionMark,
    };
  },
  props: {
    src: String,
    alt: String,
    big: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.image {
  height: 20rem;
  &--big {
    height: 50rem;
  }
}
</style>
