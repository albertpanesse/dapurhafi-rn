import {Product} from '@/apis';
import * as Types from './types';

export const getLatestProducts = () => (dispatch, getState) => {
  dispatch({type: Types.GET_LATEST_PRODUCTS_START});

  Product.getLatest()
    .then((resp) => {
      if (resp.data.success && resp.data.data && resp.data.data.length > 0) {
        dispatch({type: Types.GET_LATEST_PRODUCTS_SUCCESS});
        dispatch({type: Types.SET_LATEST_PRODUCTS, payload: resp.data.data});
      }
    })
    .catch(error => {
      dispatch({type: Types.GET_LATEST_PRODUCTS_FAIL});
    });
};

export const search = (keyword, categoryId) => (dispatch, getState) => {
  dispatch({type: Types.SEARCH_PRODUCTS_START});

  Product.search(keyword, categoryId)
    .then((resp) => {
      if (resp.data.success && resp.data.data && resp.data.data.length > 0) {
        dispatch({type: Types.SEARCH_PRODUCTS_SUCCESS});
        dispatch({type: Types.SET_SEARCH_PRODUCTS, payload: resp.data.data});
      }
    })
    .catch(error => {
      dispatch({type: Types.SEARCH_PRODUCTS_FAIL});
    });
};

export const getProductById = (productId) => (dispatch, getState) => {
  dispatch({type: Types.GET_PRODUCT_BY_ID_START});

  Product.getProductById(productId)
    .then((resp) => {
      if (resp.data.success && resp.data.data && resp.data.data.length > 0) {
        dispatch({type: Types.GET_PRODUCT_BY_ID_SUCCESS});
        dispatch({type: Types.SET_PRODUCT_BY_ID, payload: resp.data.data});
      }
    })
    .catch(error => {
      dispatch({type: Types.GET_PRODUCT_BY_ID_FAIL});
    });
};
