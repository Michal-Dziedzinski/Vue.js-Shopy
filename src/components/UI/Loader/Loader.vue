<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba($light-blue, 0.2);
  border-right: 1.1em solid rgba($light-blue, 0.2);
  border-bottom: 1.1em solid rgba($light-blue, 0.2);
  border-left: 1.1em solid $light-blue;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
