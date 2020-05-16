import axios from 'axios';
import ApiAddresses from './addresses';

export const getRetailers = () => {
  return axios(ApiAddresses.GET_RETAILERS, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
