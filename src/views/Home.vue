<template>
  <div class="home">
    <Header/>
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>
