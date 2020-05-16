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
  dispatch({type: Types.SEARCH_START});

  Product.search(keyword, categoryId)
    .then((resp) => {
      if (resp.data.success && resp.data.data && resp.data.data.length > 0) {
        dispatch({type: Types.SEARCH_SUCCESS});
        dispatch({type: Types.SET_SEARCH_RESULT, payload: resp.data.data});
      }
    })
    .catch(error => {
      dispatch({type: Types.SEARCH_FAIL});
    });
};
