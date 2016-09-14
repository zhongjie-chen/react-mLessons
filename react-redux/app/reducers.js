import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import homeReducer from './containers/App/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  homeReducer
});

export default rootReducer;
