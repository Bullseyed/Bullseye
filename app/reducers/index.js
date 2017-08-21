import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  map: require('./map-reducer').default,
  rests: require('./rest-reducer').default,
  radius: require('./radius-reducer').default,
  checkboxes: require('./checkbox-reducer').default,
  bType: require('./b-type-reducer').default,
  demoData: require('./demo-reducer').default,
  currentUser: require('./auth').default,
  zip: require('./zip-reducer').default,
  bullseye: require('./bullseye-reducer').default,
  report: require('./report').default,
  threadList: require('./thread-reducer').default,
  address: require('./address-reducer').default,
  comments: require('./comment-reducer').default
});

export default rootReducer;
