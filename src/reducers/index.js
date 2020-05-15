import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {reducer as commonReducer} from './common';
import {reducer as locationReducer} from './location';
import {reducer as profileReducer} from './profile';
import {reducer as sessionReducer} from './session';
import {reducer as userReducer} from './user';

const allReducers = {
	commonReducer,
	formReducer,
	locationReducer,
	profileReducer,
	sessionReducer,
	userReducer,
};

export default combineReducers(allReducers);
