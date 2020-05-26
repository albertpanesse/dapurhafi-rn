import {Product} from '@/apis';
import * as Types from './types';

export const addProduct = () => (dispatch, getState) => {
  const values = getState().form.product.values;
  console.log('values', values);

  // console.log('categoryID', categoryID);
  // console.log('name', name);
  // console.log('desc', desc);
  // console.log('price', price);
  // console.log('weight', weight);
  // console.log('weightUnit', weightUnit);
  // console.log('minOrder', minOrder);
};

export const getLatestProducts = () => (dispatch, getState) => {
  dispatch({type: Types.GET_LATEST_PRODUCTS_START});

  Product.getLatest()
    .then((resp) => {
      if (resp.data.success) {
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
      if (resp.data.success) {
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
      if (resp.data.success) {
        dispatch({type: Types.GET_PRODUCT_BY_ID_SUCCESS});

        const {CategoryID, ID, Name, Desc, Price, Weight, WeightUnit, MinOrder, ProductPicts, Category} = resp.data.data;
        dispatch({type: Types.SET_PRODUCT_BY_ID, payload: {
          categoryID: CategoryID,
          id: ID,
          name: Name,
          desc: Desc,
          price: Price.toString(),
          weight: Weight.toString(),
          weightUnit: WeightUnit,
          minOrder: MinOrder.toString(),
          mainPicture: ProductPicts[0].Filename,
          category: Category
        }});
      }
    })
    .catch(error => {
      dispatch({type: Types.GET_PRODUCT_BY_ID_FAIL});
    });
};

export const unsetProduct = () => (dispatch) => {
  dispatch({type: Types.UNSET_PRODUCT});
};
