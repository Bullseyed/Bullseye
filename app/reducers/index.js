import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  //map: require('./map-reducer').default,
  rests: require('./rest-reducer').default,

})

export default rootReducer
