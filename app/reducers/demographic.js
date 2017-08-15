import axios from 'axios';

const GET_DEMOGRAPHIC = 'GET_DEMOGRAPHIC';

const getDemographic = (demo) => ({
  type: GET_DEMOGRAPHIC,
  demo
});

const demographicReducer = (demoJson = [], action) => {
  switch (action.type) {
    case GET_DEMOGRAPHIC:
      return action.demo;
    default:
      return demoJson;
  }
};

export const demographicThunk = () => dispatch => {
  axios.get('https://data.cityofnewyork.us/resource/rreq-n6zk.json')
    .then(res => {
      dispatch(getDemographic(res.data));
    })
    .catch((e) => console.error(e));
}

export default demographicReducer;
