<template>
  <header class="header">
    <AppLogo logoText="Logo"/>
    <div class="header__panel">
      <nav class="u-margin-right-small">
        <ul class="header__nav">
          <NavItem to="/" isExact text="Home"/>
          <NavItem to="/about" text="About"/>
          <NavItem to="/contact" text="Contact"/>
        </ul>
      </nav>
      <slot></slot>
    </div>
  </header>
</template>

<script>
import AppLogo from '@/components/ui/AppLogo.vue';
import NavItem from '@/components/ui/NavItem.vue';

export default {
  name: 'AppHeader',
  components: {
    AppLogo,
    NavItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.header {
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 0.2rem solid $gray;
  width: 100%;
  height: 7rem;
  padding-right: 5rem;
  @include centerAlign;
  background-color: $background;
  &__nav {
    display: flex;
    font-size: $default-font-size;
  }
  &__panel {
    display: flex;
  }
}
</style>
