import {Retailer} from '@/apis';
import * as Types from './types';

export const getRetailers = () => (dispatch, getState) => {
  dispatch({type: Types.GET_RETAILERS_START});

  Retailer.getRetailers()
    .then((resp) => {
      if (resp.data.success && resp.data.data && resp.data.data.length > 0) {
        dispatch({type: Types.GET_RETAILERS_SUCCESS});
        dispatch({type: Types.SET_RETAILERS, payload: resp.data.data});
      }
    })
    .catch(error => {
      dispatch({type: Types.GET_RETAILERS_FAIL});
    });
};
