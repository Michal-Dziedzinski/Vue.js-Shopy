import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Default from '@/components/layout/Default.vue';
import WithCart from '@/components/layout/WithCart.vue';
import WithCartAndSearch from '@/components/layout/WithCartAndSearch.vue';

Vue.component('Default', Default);
Vue.component('WithCart', WithCart);
Vue.component('WithCartAndSearch', WithCartAndSearch);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('INITIALIZE_STORE');
  },
  // eslint-disable-next-line
  render: (h) => h(App),
}).$mount('#app');
