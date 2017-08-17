import axios from 'axios'

const GET_ZIP = 'GET_ZIP'

const getZip = (zip) => ({
  type: GET_ZIP,
  zip,
})

export const fetchZip = (locationObj) => dispatch => {
  axios.post('/api/yelp/restaurants', locationObj)
    .then(res => res.data)
    .then(resdata => {
      let zips = [];

      for (var i = 0; i < resdata.length; i++) {
        if (!zips.includes(+resdata[i].location.zip_code)) {
          if (i >= 15 || zips.length >= 3) break
          zips.push(+resdata[i].location.zip_code)
        }
      }
      return zips
    })
    .then(zips => dispatch(getZip(zips)))
}


function zipReducer(zips = [], action) {
  switch (action.type) {
    case GET_ZIP:
      return action.zip
    default:
      return zips;
  }
}

export default zipReducer;
