import * as Types from './types';

const initialState = {
	categories: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case Types.SET_CATEGORIES:
			return {
				...state,
				categories: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
