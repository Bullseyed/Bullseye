import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  data: require('./data-reducers').default,
  map: require('./map-reducer').default

})

export default rootReducer
