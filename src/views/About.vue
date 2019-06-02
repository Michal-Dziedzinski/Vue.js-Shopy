<template>
  <section class="wrapper">
    <Header/>
    <article class="about">
      <div class="about__icon u-margin-bottom-medium">
        <Icon isColor/>
      </div>
      <h2 class="HeadingSecondary u-margin-bottom-medium">about</h2>
      <p
        class="Paragraph u-margin-bottom-small"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus delectus hic dicta velit? Ex est earum saepe magni harum, rem, perferendis culpa consequatur, aperiam exercitationem non labore aliquam inventore!</p>
    </article>
  </section>
</template>
<script>
import Header from '@/components/Header/Header.vue';
import Icon from '@/components/UI/Icon/Icon.vue';

export default {
  name: 'About',
  components: {
    Header,
    Icon,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.wrapper {
  display: flex;
  height: 100vh;
  @include center;
}
.about {
  background-color: $white;
  padding: 10rem;
  @include center;
  flex-direction: column;
  box-shadow: 0 1rem 4rem $shadow-light;
  transition: box-shadow 0.3s;
  width: 50%;
  &:hover {
    box-shadow: 0 1rem 4rem $shadow-middle;
  }
  &__icon {
    border: 0.3rem solid $light-blue;
    padding: 1.5rem;
    border-radius: 50%;
  }
}
</style>
