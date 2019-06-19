export default {
  ADD_ITEM_TO_LIST(state, payload) {
    state.items.push(payload);
    console.log(state);
  },
  ADD_ITEM_TO_CART(state, payload) {
    console.log(state, payload);
  },
  REMOVE_ITEM_FROM_CART(state, payload) {
    console.log(state, payload);
  },
};
