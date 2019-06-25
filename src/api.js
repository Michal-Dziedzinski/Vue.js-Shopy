/* eslint-disable */

import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers';
const AMOUNT_OF_ITEMS = 20;

export const getItem = async (id) => {
  let res = await axios.get(`${API}/${id}`);
  let data = res.data;
  return data;
};

export const getItems = async (page) => {
  let res = await axios.get(`${API}/?page=${page}&per_page=${AMOUNT_OF_ITEMS}`);
  let data = res.data;
  return data;
};
