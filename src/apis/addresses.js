import {API_HOST} from 'react-native-dotenv';

export default {
  SESSION_SIGNIN: `${API_HOST}/session/signin`,
  SESSION_SIGNOUT: `${API_HOST}/session/signout`,
  USER_SIGNUP: `${API_HOST}/user/signup`,
  GET_LATEST_PRODUCTS: `${API_HOST}/latest`,  
  SEARCH_PRODUCTS: `${API_HOST}/product-search`,

  GET_CATEGORIES: `${API_HOST}/categories`,

  GET_RETAILERS: `${API_HOST}/retailers`,
}
