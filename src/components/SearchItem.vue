<template>
  <div class="search">
    <div class="search__icon">
      <AppIcon iconName="magnifying-glass" isColor/>
    </div>
    <div class="search__group u-margin-left-small u-margin-top-small">
      <input
        type="text"
        class="search__input"
        id="search"
        placeholder="Search"
        v-model="searchValue"
        @input="handleInput"
      >
      <label for="search" class="search__label">Search</label>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/ui/AppIcon.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'SearchItem',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput() {
      this.FILTER_ITEMS_FROM_LIST(this.searchValue);
    },
    ...mapMutations(['FILTER_ITEMS_FROM_LIST']),
  },
  components: {
    AppIcon,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.search {
  @include center;
  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 0.5rem 2rem;
    border-radius: 2px;
    background-color: rgba($white, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 22rem;
    display: block;
    transition: all 0.3s;
    border-bottom: 3px solid $gray;
    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba($black, 0.1);
      border-bottom: 3px solid $accent;
    }
    &:focus:invalid {
      border-bottom: 3px solid $alert;
    }
    &::-webkit-input-placeholder {
      color: $dark-text;
    }
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    display: block;
    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
}
</style>
