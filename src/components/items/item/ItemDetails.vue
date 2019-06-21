<template>
  <article class="details">
    <div v-if="loading" class="details__loader">
      <AppLoader/>
    </div>
    <div v-else class="details__content">
      <div class="details__image">
        <ItemImage :src="beer.image_url" :alt="beer.name" big/>
      </div>
      <div class="details__description">
        <div class="details__text">
          <h2 class="HeadingSecondary HeadingSecondary--white u-margin-bottom-small">{{beer.name}}</h2>
          <p class="Paragraph Paragraph--white">{{beer.description}}</p>
        </div>
        <div class="details__button u-margin-left-small">
          <AppButton
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
import AppLoader from '@/components/ui/AppLoader.vue';
import ItemImage from '@/components/ui/ItemImage.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { mapMutations } from 'vuex';
import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers';

export default {
  name: 'ItemDetails',
  data() {
    return {
      beer: null,
      loading: true,
      isClicked: false,
    };
  },
  mounted() {
    // eslint-disable-next-line
    axios.get(`${API}/${this.id}`).then((response) => {
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
      this.ADD_ITEM_TO_CART(this.beer);
    },
    ...mapMutations(['ADD_ITEM_TO_CART']),
  },
  components: {
    AppLoader,
    ItemImage,
    AppButton,
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
