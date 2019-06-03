<template>
  <div class="cart">
    <div class="cart__item u-margin-bottom-small">
      <div class="cart__icon-group u-margin-bottom-small">
        <Icon iconName="contact-book"/>
        <p class="Paragraph--white Paragraph--big u-margin-left-small">Contact</p>
      </div>
      <p
        class="Paragraph Paragraph--white"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum debitis fuga repellat incidunt aliquid, doloribus velit voluptate quas reiciendis animi labore minima magnam impedit laborum aut. Repellat, nam eligendi.</p>
    </div>
    <div class="cart__item u-margin-bottom-small">
      <div class="cart__icon-group u-margin-bottom-small">
        <Icon iconName="shopping-cart"/>
        <p class="Paragraph--white Paragraph--big u-margin-left-small">Cart</p>
      </div>
      <div class="cart__bucket">
        <p class="Paragraph Paragraph--white">Cart is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/UI/Icon/Icon.vue';

export default {
  name: 'Cart',
  components: {
    Icon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.cart {
  background-color: $light-blue;
  width: 25rem;
  padding: 2rem;
  position: fixed;
  left: 5rem;
  top: 10rem;
  &__icon-group {
    @include centerAlign;
  }
  &__bucket {
    min-height: 20rem;
    width: 100%;
    border: 0.2rem dashed $white;
    @include center;
  }
}
</style>
