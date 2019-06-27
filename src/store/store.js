/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import {
  getItems
} from '@/api';

Vue.use(Vuex);
const types = {
  ADD_ITEM_TO_LIST: 'ADD_ITEM_TO_LIST',
  REMOVE_ITEMS_FROM_LIST: 'REMOVE_ITEMS_FROM_LIST',
  FILTER_ITEMS_FROM_LIST: 'FILTER_ITEMS_FROM_LIST',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  INITIALIZE_STORE: 'INITIALIZE_STORE',
  SET_QUERY: 'SET_QUERY',
};

const store = new Vuex.Store({
  state: {
    itemsFragment: [],
    allItems: [],
    page: 2,
    cartItemsIds: [],
    query: '',
  },
  getters: {
    getFilteredItems(state) {
      return state.allItems.filter((item) =>
        item.name.toLowerCase().includes(state.query.toLowerCase())
      );
    },
    getItemsToCart(state) {
      return state.allItems.filter((item) => state.cartItemsIds.includes(item.id));
    },
  },
  mutations: {
    [types.ADD_ITEM_TO_LIST](state, payload) {
      state.allItems = [...state.allItems, ...payload];
      state.itemsFragment = [...payload];
      state.page++;
    },
    [types.REMOVE_ITEMS_FROM_LIST](state) {
      state.allItems = [];
      state.page = 2;
    },
    [types.FILTER_ITEMS_FROM_LIST](state, payload) {
      state.query = payload;
    },
    [types.ADD_ITEM_TO_CART]({
      cartItemsIds
    }, payload) {
      cartItemsIds.push(payload.id);
    },
    [types.REMOVE_ITEM_FROM_CART](
      state, payload) {
      state.cartItemsIds = state.cartItemsIds.filter((id) => {
        return id !== payload
      });
    },
    [types.SET_QUERY](state, payload) {
      state.query = payload;
    },
    [types.INITIALIZE_STORE](state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
      }
    },
  },
  actions: {
    async fetchItems({
      commit
    }, payload) {
      const data = await getItems(payload);
      await commit(types.ADD_ITEM_TO_LIST, data);
    },
  },
});

// Subscribe to store updates
store.subscribe((mutation, {
  cart,
  cartItemsIds
}) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify({
    cart,
    cartItemsIds
  }));
});

export default store;
