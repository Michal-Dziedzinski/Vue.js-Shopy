import Vue from 'vue';
// import { mapMutations } from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('INITIALIZE_STORE');
  },
  // methods: {
  //   ...mapMutations(['INITIALIZE_STORE']),
  // },
  render: h => h(App),
}).$mount('#app');
