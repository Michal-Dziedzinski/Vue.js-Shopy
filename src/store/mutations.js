/* eslint-disable */
export default {
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
};
