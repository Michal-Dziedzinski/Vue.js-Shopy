<template>
  <button
    class="button"
    :class="{ 'button--opacity': !isOpacity }"
    :disabled="isOpacity"
    @click="clickButton"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    isOpacity: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    clickButton() {
      this.$emit('clicked');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.button {
  border: 0.5rem solid $accent;
  background-color: $accent;
  padding: 1rem 2rem;
  color: $white;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  width: 16rem;
  &:hover {
    background-color: transparent;
    border: 0.5rem solid $white;
    color: $white;
  }
  &--opacity {
    opacity: 0.8;
    &:hover {
      border: 0.5rem solid $accent;
      background-color: $accent;
    }
  }
}
</style>
