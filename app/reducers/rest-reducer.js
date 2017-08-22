import axios from 'axios'

const GET_RESTS = 'GET_RESTS'
const CLEAR_RESTS = 'CLEAR_RESTS'

const getRests = (restList) => ({
  type: GET_RESTS,
  restList,
})

export const clearRests = () => ({
  type: CLEAR_RESTS
})

export const fetchRests = (locationObj) => dispatch => (
  axios.post('/api/yelp/restaurants', locationObj)
  .then(res=>res.data)
  .then(restList => dispatch(getRests(restList)))
)

function restReducer (rests = [], action) {
  switch(action.type){
    case GET_RESTS:
      return rests.concat(action.restList)
    case CLEAR_RESTS:
      return [];
    default:
      return rests;
  }
}

export default restReducer;
