<template>
  <div>
    <p>{{beer.name}}</p>
    <p>{{beer.tagline}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'BeerItem',
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
};
</script>
