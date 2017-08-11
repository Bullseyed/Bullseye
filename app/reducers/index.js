import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  rests: require('./rest-reducer').default

})

export default rootReducer
