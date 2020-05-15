import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import commonReducer from './common';
import sessionReducer from './session';
import locationReducer from './location';

const allReducers = {
	formReducer,
	commonReducer,
	sessionReducer,
	locationReducer
};

export default combineReducers(allReducers);
