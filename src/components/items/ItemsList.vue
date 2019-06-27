<template>
  <article class="list">
    <div class="list__items">
      <div class="list__item" v-for="item in availableItems" :key="item.id">
        <router-link :to="{ name: 'itemPage', params:{id: item.id} }">
          <ItemElement :item="item"/>
        </router-link>
      </div>
    </div>
    <slot></slot>
  </article>
</template>

<script>
import ItemElement from '@/components/items/item/ItemElement.vue';

export default {
  name: 'ItemsList',
  props: {
    availableItems: {
      type: Array,
    },
  },
  components: {
    ItemElement,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.list {
  width: 100%;
  padding-left: 30rem;
  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    @include respond(big-desktop) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @include respond(tab-port) {
      grid-template-columns: 1fr 1fr;
    }
    @include respond(phone) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    background-color: $white;
    cursor: pointer;
  }
}
</style>
