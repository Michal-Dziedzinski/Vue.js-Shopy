import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    allItems: [],
    allItemsBuffer: [],
    page: 2,
    cart: [],
    itemsIds: [],
    cartItemsIds: [],
  },
  getters,
  mutations,
  actions,
});
