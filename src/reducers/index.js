import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {reducer as categoryReducer} from './category';
import {reducer as commonReducer} from './common';
import {reducer as locationReducer} from './location';
import {reducer as productReducer} from './product';
import {reducer as profileReducer} from './profile';
import {reducer as retailerReducer} from './retailer';
import {reducer as sessionReducer} from './session';
import {reducer as userReducer} from './user';

const allReducers = {
	categoryReducer,
	commonReducer,
	formReducer,
	locationReducer,
	productReducer,
	profileReducer,
	retailerReducer,
	sessionReducer,
	userReducer,
};

export default combineReducers(allReducers);
