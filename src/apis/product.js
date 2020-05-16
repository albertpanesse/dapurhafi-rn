import ApiAddresses from './addresses';

export const getLatest = () => axios({
  url: ApiAddresses.GET_LATEST_PRODUCTS,
  method: 'GET',
});
