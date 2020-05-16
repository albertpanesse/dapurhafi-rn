import axios from 'axios';
import ApiAddresses from './addresses';

export const getCategories = () => {
  return axios(ApiAddresses.GET_CATEGORIES, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
