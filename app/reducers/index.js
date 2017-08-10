import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  data: require('./data-reducers')

})

export default rootReducer
