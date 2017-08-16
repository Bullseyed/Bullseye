import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  //map: require('./map-reducer').default,
  rests: require('./rest-reducer').default,
  radius: require('./radius-reducer').default,
  checkboxes: require('./checkbox-reducer').default,
  bType: require('./b-type-reducer').default,
  demographic: require('./demographic').default,
  currentUser: require('./auth').default
});

export default rootReducer;
