<template>
  <section>
    <AppHeader/>
    <article class="contact">
      <div class="contact__icon u-margin-bottom-medium">
        <AppIcon isColor iconName="contact-book"/>
      </div>
      <h2 class="HeadingSecondary u-margin-bottom-medium">Contact</h2>
      <a
        class="contact__link u-margin-bottom-medium"
        href="mailto:divante@divante.pl"
        title="Write to us!"
      >divante@divante.pl</a>
      <a
        class="contact__link u-margin-bottom-small"
        href="tel:0048123456789"
        title="Call to us!"
      >tel. 123-456-789</a>
      <a
        class="contact__link u-margin-bottom-medium"
        href="tel:0048887236324"
        title="Call to us!"
      >tel. 887-236-324</a>
      <p class="Paragraph u-margin-bottom-small">ul. Dmowskiego 17</p>
      <p class="Paragraph">00-000 Wrocław</p>
    </article>
  </section>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppIcon from '@/components/ui/AppIcon.vue';

export default {
  name: 'ContactPage',
  components: {
    AppHeader,
    AppIcon,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.contact {
  background-color: $white;
  padding: 10rem;
  @include center;
  flex-direction: column;
  box-shadow: 0 1rem 4rem $shadow-light;
  transition: box-shadow 0.3s;
  &__link {
    color: $light-text;
    font-size: $default-font-size;
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
