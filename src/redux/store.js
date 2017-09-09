import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from 'src/redux/reducers/reducer';

const middleWares = [];

if (DEVELOPMENT) { // eslint-disable-line
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });
  middleWares.push(logger);
}

const Reducer = combineReducers({ reducers });

const Store = createStore(
  Reducer,
  applyMiddleware(...middleWares),
);

export default Store;
