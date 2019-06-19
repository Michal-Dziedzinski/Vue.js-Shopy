/* eslint-disable no-plusplus */
export default {
  ADD_ITEM_TO_LIST(state, payload) {
    console.log('state', state.items, 'payload', payload);
    state.allItems = [...state.allItems, ...payload];
    const newIds = [];

    payload.forEach((element) => {
      newIds.push(element.id);
    });

    state.cartItemsIds = [...state.cartItemsIds, payload.map()];
    state.items = [...payload];
    state.page++;
  },
  REMOVE_ITEM_FROM_LIST(state) {
    console.log('Remove from list');
    // eslint-disable-next-line no-param-reassign
    state.allItems = [];
  },
  ADD_ITEM_TO_CART({ cart }, payload) {
    cart.push(payload);
  },
  REMOVE_ITEM_FROM_CART({ cart }, payload) {
    cart.splice(payload, 1);
  },
};
