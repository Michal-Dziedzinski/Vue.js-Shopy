/* eslint-disable */

import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers';

export const getSingleBeer = async (id) => {
  let res = await axios.get(`${API}/${id}`);
  let { data } = res.data;
  return data;
};

console.log(getSingleBeer(2));
