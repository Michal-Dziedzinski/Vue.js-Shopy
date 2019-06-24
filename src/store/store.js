/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
    allItems: [],
    allItemsBuffer: [],
    page: 2,
    cart: [],
    itemsIds: [],
    cartItemsIds: [],
  },
  mutations: {
    ADD_ITEM_TO_LIST(state, payload) {
      state.allItems = [...state.allItems, ...payload];
      state.allItemsBuffer = [...state.allItemsBuffer, ...payload];
      const newIds = [];

      payload.forEach((element) => {
        newIds.push(element.id);
      });
      state.itemsIds = [...state.cartItemsIds, ...newIds];
      state.items = [...payload];
      state.page++;
    },
    REMOVE_ITEMS_FROM_LIST(state) {
      state.allItems = [];
      state.allItemsBuffer = [];
    },
    FILTER_ITEMS_FROM_LIST(state, payload) {
      state.allItems = state.allItemsBuffer;
      state.allItems = state.allItems.filter((item) =>
        item.name.toLowerCase().includes(payload.toLowerCase())
      );
    },
    ADD_ITEM_TO_CART({ cart, cartItemsIds }, payload) {
      cart.push(payload);
      cartItemsIds.push(payload.id);
    },
    REMOVE_ITEM_FROM_CART({ cart, cartItemsIds }, payload) {
      cart.splice(payload, 1);
      cartItemsIds.splice(payload, 1);
    },
    INITIALIZE_STORE(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
      }
    },
  },
  actions: {
    async fetchItems({ commit }, payload) {
      const res = await axios.get(payload.apiRequest);
      const { data } = res;
      await commit('ADD_ITEM_TO_LIST', data);
    },
  },
});

// Subscribe to store updates
store.subscribe((mutation, { cart, cartItemsIds }) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify({ cart, cartItemsIds }));
});

export default store;
