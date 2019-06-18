export default {
  async fetchItems({ commit }, payload) {
    await commit('ADD_ITEM_TO_LIST', payload);
  },
};
