import devTools from 'remote-redux-devtools';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '@/reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const redux_devTools = () => {
  return window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose;
};

const enhancer = compose(applyMiddleware(thunk), redux_devTools());

const store = createStore(reducer, enhancer);

export default store;
