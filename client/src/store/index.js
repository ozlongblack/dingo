import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

let middlewares = [];

if (process.env.NODE_ENV === 'production') {
} else {
  middlewares = [...middlewares, logger];
}

let store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk, ...middlewares)
);

export default store;
