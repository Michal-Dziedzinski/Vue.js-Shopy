<template>
  <div
    :class="isColor ? 'icon icon--color' : 'icon'"
    :style="{'-webkit-mask': 'url('+ require(`../../../assets/icons/${iconName}.svg`)+')', '-webkit-mask-size': 'cover'}"
  ></div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    isColor: {
      type: Boolean,
      required: false,
    },
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.icon {
  height: 4rem;
  width: 4rem;
  background-color: $white;
  background-size: cover;
  // mask: url('../../../assets/icons/contact-book.svg');
  &--color {
    background-color: $light-blue;
  }
}
</style>
