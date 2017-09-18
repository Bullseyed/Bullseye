import axios from 'axios';

const GET_ADDRESS = 'GET_ADDRESS'

const getAddress = (address) => ({
  type: GET_ADDRESS,
  address,
})


export const fetchAddress = (latLongObj) => dispatch => {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLongObj.latitude},${latLongObj.longitude}&sensor=true`)
  .then(res => res.data)
  .then(address => dispatch(getAddress(address.results)))
}

function addressReducer (address = [], action) {
  switch (action.type){
    case GET_ADDRESS:
      return action.address;
    default:
      return address;
  }
}

export default addressReducer;
