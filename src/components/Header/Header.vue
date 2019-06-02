<template>
  <header class="header">
    <Logo logoText="Logo"/>
    <nav>
      <ul class="header__nav">
        <NavItem to="/" isExact text="Home"/>
        <NavItem to="/about" text="About"/>
        <NavItem to="/contact" text="Contact"/>
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
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 0.2rem solid $gray;
  width: 100%;
  height: 5rem;
  @include centerAlign;
  &__nav {
    display: flex;
    font-size: 1.4rem;
  }
}
</style>
