<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';
.wrapper {
  padding: 10rem 5rem;
  min-height: 100vh;
  @include center;
}
</style>
