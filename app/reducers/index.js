import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  data: require('./data-reducers').default

})

export default rootReducer
