import {API_HOST} from 'react-native-dotenv';

export default {
  GET_LATEST_PRODUCTS: `${API_HOST}/latest`,
  SEARCH_PRODUCTS: `${API_HOST}/product-search`,
  GET_PRODUCT_BY_ID: (id) => `${API_HOST}/product/${id}`,

  GET_CATEGORIES: `${API_HOST}/categories`,

  GET_RETAILERS: `${API_HOST}/retailers`,
}
