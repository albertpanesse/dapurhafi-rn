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
