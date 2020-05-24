import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {reducer as categoryReducer} from './category';
import {reducer as commonReducer} from './common';
import {reducer as productReducer} from './product';

const allReducers = {
	categoryReducer,
	commonReducer,
	formReducer,
	productReducer,
};

export default combineReducers(allReducers);
