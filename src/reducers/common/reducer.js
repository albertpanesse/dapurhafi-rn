import Types from './types';

const initialState = {
	isNetworkOk: true,
	isAuthenticated: false,
	notification: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

export default reducer;
