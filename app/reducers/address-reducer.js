import geocoding from 'reverse-geocoding';

const GET_ADDRESS = 'GET_ADDRESS'

const getAddress = (address) => ({
  type: GET_ADDRESS,
  address,
})


export const fetchAddress = (latLongObj) => dispatch => {
  geocoding.location(latLongObj, function (err, data){
    if (err) {
        console.log(err);
    } else {
      const address = data.results[0].formatted_address;
      const neighborhood  = data.results[0].address_components[2].long_name;
      dispatch(getAddress([address, neighborhood]));
    }
  });
};

function addressReducer (address = [], action) {
  switch (action.type){
    case GET_ADDRESS:
      return action.address;
    default:
      return address;
  }
}

export default addressReducer;
