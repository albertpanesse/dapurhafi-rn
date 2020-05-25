import * as Types from './types';

const initialState = {
	product: null,
	latestProducts: [],
	searchResults: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case Types.SET_LATEST_PRODUCTS:
			return {
				...state,
				latestProducts: action.payload
			};
		case Types.SET_SEARCH_PRODUCTS:
			return {
				...state,
				searchResults: action.payload
			};
		case Types.SET_PRODUCT_BY_ID:
			return {
				...state,
				product: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
