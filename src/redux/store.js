import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from 'redux/reducers/reducer';

const middleWares = [];

if (__DEV__) {
  middleWares.push(logger);
}

const Reducer = combineReducers({reducers});

const Store = createStore(
  Reducer,
  applyMiddleware(...middleWares)
);

export default Store;
