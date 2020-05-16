import {Product} from '@/apis';

export const getLatestProducts = () => (dispatch, getState) => {

  dispatch({type: Types.GET_LATEST_PRODUCTS_START});

  Product.getLatest()
    .then(resp => {
      if (resp.success && resp.data && resp.data.length > 0) {
        dispatch({type: Types.GET_LATEST_PRODUCTS_SUCCESS});
        dispatch({type: Types.SET_LATEST_PRODUCTS, payload: resp.data});
      }
    })
    .catch(error => {
      dispatch({type: Types.GET_LATEST_PRODUCTS_FAIL});
    });
};
