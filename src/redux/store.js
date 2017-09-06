import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from 'src/redux/reducers/reducer';

const middleWares = [];

if (DEVELOPMENT) {
  middleWares.push(logger);
}

const Reducer = combineReducers({ reducers });

const Store = createStore(
  Reducer,
  applyMiddleware(...middleWares),
);

export default Store;
