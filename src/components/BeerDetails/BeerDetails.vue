<template>
  <article class="details">
    <div v-if="loading" class="details__loader">
      <Loader/>
    </div>
    <div v-else class="details__content">
      <div class="details__image">
        <BeerImage :src="beer.image_url" :alt="beer.name" big/>
      </div>
      <div class="details__description">
        <div class="details__text">
          <h2 class="HeadingSecondary HeadingSecondary--white u-margin-bottom-small">{{beer.name}}</h2>
          <p class="Paragraph Paragraph--white">{{beer.description}}</p>
        </div>
        <div class="details__button u-margin-left-small">
          <Button
            :text="isClicked ? 'Added' : 'Add to Card'"
            :isOpacity="isClicked"
            @clicked="addToCart"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Loader from '@/components/UI/Loader/Loader.vue';
import BeerImage from '@/components/UI/BeerImage/BeerImage.vue';
import Button from '@/components/UI/Button/Button.vue';
import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers';

export default {
  name: 'BeerDetails',
  data() {
    return {
      beer: null,
      loading: true,
      isClicked: false,
    };
  },
  mounted() {
    // eslint-disable-next-line
    axios.get(`${API}/${this.id}`).then(response => {
      [this.beer] = response.data;
      this.loading = false;
    });
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.isClicked = true;
      this.$emit('addedToCart', this.beer);
    },
  },
  components: {
    Loader,
    BeerImage,
    Button,
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';
.details {
  width: 100%;
  padding-left: 30rem;
  &__loader {
    @include center;
  }
  &__image {
    @include center;
    padding: 5rem;
  }
  &__description {
    background-color: $light-blue;
    padding: 5rem;
    display: flex;
    justify-content: space-between;
  }
  &__text {
    width: 60%;
  }
  &__button {
    @include center;
    background-color: $light-blue;
  }
}
</style>
