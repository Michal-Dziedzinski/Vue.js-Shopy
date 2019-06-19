import axios from 'axios';

export default {
  async fetchItems({ commit }, payload) {
    const res = await axios.get(payload.apiRequest);
    const { data } = res;
    await commit('ADD_ITEM_TO_LIST', data);
  },
};
