import axios from 'axios';

import { updateRadius } from './radius-reducer';
import { AddBType } from './b-type-reducer';
// import { create as createUser } from './users';
// import history from '../history';

/* ------------------    ACTIONS    --------------------- */

const ADD_B_TYPE = 'ADD_B_TYPE';
const ADD_LNG_LAT = 'ADD_LNG_LAT';
const UPDATE_RADIUS = 'UPDATE_RADIUS';

/* --------------    ACTION CREATORS    ----------------- */

export const addLngLat = (longitude, latitude) => ({
  type: ADD_LNG_LAT,
  longitude,
  latitude
});

/* ------------------    REDUCER    --------------------- */

export default function reducer (state = {
  longitude: null,
  latitude: null,
  radius: null,
  businessType: null,
  businessSubtype: null,
  crimeChecked: false,
  demographicsChecked: false,
  incomeChecked: false,
  popDensityChecked: false
}, action) {
  switch (action.type) {
    case ADD_B_TYPE:
      state.businessType = action.typeStr;
      break;
    case ADD_LNG_LAT:
      state.longitude = action.longitude;
      state.latitude = action.latitude;
      break;
    case UPDATE_RADIUS:
      state.radius = action.radInt;
      break;
    default:
      return state;
  }
  return state;
}
