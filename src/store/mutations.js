/* eslint-disable no-plusplus */
export default {
  ADD_ITEM_TO_LIST(state, payload) {
    // eslint-disable-next-line no-param-reassign
    state.allItems = [...state.allItems, ...payload];
    const newIds = [];

    payload.forEach((element) => {
      newIds.push(element.id);
    });
    // eslint-disable-next-line no-param-reassign
    state.itemsIds = [...state.cartItemsIds, ...newIds];
    // eslint-disable-next-line no-param-reassign
    state.items = [...payload];
    // eslint-disable-next-line no-param-reassign
    state.page++;
  },
  REMOVE_ITEMS_FROM_LIST(state) {
    // eslint-disable-next-line no-param-reassign
    state.allItems = [];
  },
  ADD_ITEM_TO_CART({ cart, cartItemsIds }, payload) {
    cart.push(payload);
    // eslint-disable-next-line no-param-reassign
    cartItemsIds.push(payload.id);
  },
  REMOVE_ITEM_FROM_CART({ cart, cartItemsIds }, payload) {
    cart.splice(payload, 1);
    cartItemsIds.splice(payload, 1);
  },
};
