<template>
  <section class="wrapper">
    <Header/>
    <article class="contact">
      <div class="contact__icon u-margin-bottom-medium">
        <Icon isColor iconName="contact-book"/>
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
import Header from '@/components/Header/Header.vue';
import Icon from '@/components/UI/Icon/Icon.vue';

export default {
  name: 'Contact',
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
.contact {
  background-color: $white;
  padding: 10rem;
  @include center;
  flex-direction: column;
  box-shadow: 0 1rem 4rem $shadow-light;
  transition: box-shadow 0.3s;
  width: 50%;
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
