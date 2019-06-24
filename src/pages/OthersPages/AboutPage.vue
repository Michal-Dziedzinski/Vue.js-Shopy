<template>
  <section class="about">
    <AppHeader/>
    <article class="about__content">
      <div class="about__icon u-margin-bottom-medium">
        <AppIcon isColor iconName="contact-book"/>
      </div>
      <h2 class="HeadingSecondary u-margin-bottom-medium">about</h2>
      <p
        class="Paragraph u-margin-bottom-small"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus delectus hic dicta velit? Ex est earum saepe magni harum, rem, perferendis culpa consequatur, aperiam exercitationem non labore aliquam inventore!</p>
    </article>
  </section>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';

export default {
  name: 'AboutPage',
  components: {
    AppHeader,
    AppIcon,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.about {
  @include center;
  min-height: 100vh;
  &__content {
    width: 50%;
    background-color: $white;
    padding: 10rem;
    @include center;
    flex-direction: column;
    box-shadow: 0 1rem 4rem $shadow-light;
    transition: box-shadow 0.3s;
  }
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
