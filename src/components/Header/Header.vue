<template>
  <header class="header">
    <Logo logoText="Logo"/>
    <nav>
      <ul class="header__nav">
        <NavItem to="/" isExact text="Home"/>
        <NavItem to="/about" text="About"/>
        <NavItem to="/contact" text="Contact"/>
        <!-- <li class="header__nav-item">
          <router-link class="header__link" active-class="header__link--active" to="/" exact>Home</router-link>
        </li>
        <li class="header__nav-item">
          <router-link class="header__link" active-class="header__link--active" to="/about">About</router-link>
        </li>
        <li class="header__nav-item">
          <router-link
            class="header__link"
            active-class="header__link--active"
            to="/contact"
          >Contact</router-link>
        </li>-->
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from '../UI/Logo/Logo.vue';
import NavItem from '../UI/NavItem/NavItem.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    NavItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.header {
  display: flex;
  justify-content: space-between;
  &__nav {
    display: flex;
    font-size: 1.4rem;
    &-item {
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
    }
    &-item:hover::before,
    &-item--active:before {
      transform: scaleY(1);
      width: 100%;
      color: $white;
    }
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
