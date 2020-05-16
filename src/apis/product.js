import axios from 'axios';
import ApiAddresses from './addresses';

export const getLatest = () => {
  return axios(ApiAddresses.GET_LATEST_PRODUCTS, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};

export const search = (keyword = '', categoryId = -1) => {
  return axios(ApiAddresses.SEARCH_PRODUCTS, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      keyword,
      categoryId
    }
  });
};
