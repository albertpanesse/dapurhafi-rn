import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as categoryReducer} from './category';
import {reducer as commonReducer} from './common';
import {reducer as productReducer} from './product';

const allReducers = {
	category: categoryReducer,
	common: commonReducer,
	form: formReducer,
	product: productReducer,
};

export default combineReducers(allReducers);
