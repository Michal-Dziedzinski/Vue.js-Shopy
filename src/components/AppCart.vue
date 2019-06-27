<template>
  <div class="cart">
    <div class="cart__element u-margin-bottom-small">
      <div class="cart__icon-group u-margin-bottom-small">
        <AppIcon iconName="contact-book"/>
        <p class="Paragraph--white Paragraph--big u-margin-left-small">Contact</p>
      </div>
      <p
        class="Paragraph Paragraph--white"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum debitis fuga repellat incidunt aliquid, doloribus velit voluptate quas reiciendis animi labore minima magnam impedit laborum aut. Repellat, nam eligendi.</p>
    </div>
    <div class="cart__element u-margin-bottom-small">
      <div class="cart__icon-group u-margin-bottom-small">
        <AppIcon iconName="shopping-cart"/>
        <p
          class="Paragraph--white Paragraph--big u-margin-left-small"
        >Cart {{getItemsToCart.length > 0 ? `(${getItemsToCart.length})` : null}}</p>
      </div>
      <div class="cart__bucket">
        <p
          class="cart__info Paragraph Paragraph--white"
          v-if="getItemsToCart.length === 0"
        >Cart is empty</p>
        <ul class="cart__list">
          <li class="cart__item" v-for="(item, index) in getItemsToCart" :key="item.id">
            <span class="cart__price">{{item.abv}}</span>
            {{item.name}}
            <div class="cart__delete" @click="removeFromCart(index)"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/ui/AppIcon.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AppCart',
  components: {
    AppIcon,
  },
  computed: {
    ...mapGetters(['getItemsToCart']),
  },

  methods: {
    removeFromCart(index) {
      this.REMOVE_ITEM_FROM_CART(index);
    },
    ...mapMutations(['REMOVE_ITEM_FROM_CART']),
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
  &__info {
    padding-top: 9rem;
    text-align: center;
  }
  &__bucket {
    min-height: 20rem;
    width: 100%;
    border: 0.2rem dashed $white;
  }
  &__item {
    color: $white;
    font-size: 1.8rem;
    background-color: $dark-blue;
    width: calc(100% - 2rem);
    padding: 0.5rem;
    margin: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    &:hover .cart__delete {
      transform: translateX(0);
      opacity: 1;
    }
  }
  &__price {
    color: $accent;
    padding: 0 0.5rem;
  }
  &__delete {
    transition: transform 0.3s, opacity 0.3s;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: $alert;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    opacity: 0;
    transform: translateX(1rem);
    cursor: pointer;
    &::after {
      content: '';
      border-bottom: 0.2rem solid $white;
      width: 1.6rem;
      height: 0.1rem;
      top: 0.9rem;
      left: 0.2rem;
      position: absolute;
    }
  }
}
</style>
