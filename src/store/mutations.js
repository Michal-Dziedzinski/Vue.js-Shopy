export default {
  ADD_ITEM_TO_LIST(state, payload) {
    console.log(state, payload.apiRequest);
  },
  ADD_ITEM_TO_CART(state, payload) {
    console.log(state, payload);
  },
  REMOVE_ITEM_FROM_CART(state, payload) {
    console.log(state, payload);
  },
};
