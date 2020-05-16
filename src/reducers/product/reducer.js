import Types from './types';

const initialState = {
	latestProducts: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case Types.SET_LATEST_PRODUCTS:
			return {
				...state,
				latestProducts: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
