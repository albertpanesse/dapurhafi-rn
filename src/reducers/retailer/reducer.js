import * as Types from './types';

const initialState = {
	retailers: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case Types.SET_RETAILERS:
			return {
				...state,
				retailers: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
