import * as actionTypes from './types';

const initialState = {
	isNetworkOk: null
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.SET_NETWORK_STATUS:
			return {
				...state,
				isNetworkOk: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
