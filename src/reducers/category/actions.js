import {Category} from '@/apis';
import * as Types from './types';

export const getCategories = () => (dispatch, getState) => {
  dispatch({type: Types.GET_CATEGORIES_START});

  Category.getCategories()
    .then((resp) => {
      if (resp.data.success && resp.data.data && resp.data.data.length > 0) {
        dispatch({type: Types.GET_CATEGORIES_SUCCESS});
        dispatch({type: Types.SET_CATEGORIES, payload: resp.data.data});
      }
    })
    .catch(error => {
      dispatch({type: Types.GET_CATEGORIES_FAIL});
    });
};
