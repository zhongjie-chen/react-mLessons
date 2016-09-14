import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];
const createLogger = require('redux-logger');

// if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
//}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);
