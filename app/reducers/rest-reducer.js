import axios from 'axios'

const GET_RESTS = 'GET_RESTS'

const getRests = (restList) => ({
  type: GET_RESTS,
  restList,
})

export const fetchRests = (locationObj) => dispatch => {
  console.log('firing')
  axios.post('/api/yelp/restaurants', locationObj)
  .then(res=>res.data)
  .then(restList => dispatch(getRests(restList)))
}

function restReducer (rests = [], action) {
  switch(action.type){
    case GET_RESTS:
      return rests.concat(action.restList)
    default:
      return rests;
  }
}

export default restReducer;
