<template>
  <li class="nav-item">
    <router-link
      class="nav-item__link"
      active-class="nav-item__link--active"
      :to="to"
      :exact="isExact"
    >{{text}}</router-link>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to: {
      type: String,
      required: true,
    },
    isExact: {
      type: Boolean,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.nav-item {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: $dark-blue;
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }
  &:hover::before,
  &--active:before {
    transform: scaleY(1);
    width: 100%;
    color: $white;
  }
  &__link {
    transition: color 1s;
    font-weight: 700;
    &:link,
    &:visited {
      color: $dark-text;
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 1.5rem 3rem;
      position: relative;
      z-index: 10;

      display: flex;
      align-items: center;

      justify-content: center;
    }
    &:hover {
      color: $white;
    }
    &--active {
      &:link,
      &:visited {
        color: $dark-blue;
      }
      &:hover {
        color: $white;
      }
    }
  }
}
</style>
