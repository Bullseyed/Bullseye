import axios from 'axios';

import { updateRadius } from './radius-reducer';
import { AddBType } from './b-type-reducer';
// import { create as createUser } from './users';
// import history from '../history';

/* ------------------    ACTIONS    --------------------- */

const ADD_B_TYPE = 'ADD_B_TYPE';
const ADD_LNG_LAT = 'ADD_LNG_LAT';
const UPDATE_RADIUS = 'UPDATE_RADIUS';
const SWITCH_MEASUREMENT = 'SWITCH_MEASUREMENT';

/* --------------    ACTION CREATORS    ----------------- */

export const addLngLat = (latitude, longitude) => ({
  type: ADD_LNG_LAT,
  latitude,
  longitude
});

export const switchMeasurement = measurement => ({
  type: SWITCH_MEASUREMENT,
  measurement
});


/* ------------------    REDUCER    --------------------- */

export default function reducer (state = {
  latitude: null,
  longitude: null,
  radius: null,
  businessType: null,
  distanceMeasurement: 'miles'
}, action) {
  switch (action.type) {
    case ADD_B_TYPE:
      state.businessType = action.typeStr;
      break;
    case ADD_LNG_LAT:
      state.latitude = action.latitude;
      state.longitude = action.longitude;
      break;
    case UPDATE_RADIUS:
      state.radius = action.radInt;
      break;
    case SWITCH_MEASUREMENT:
      state.distanceMeasurement = action.measurement;
      break;
    default:
      return state;
  }
  return state;
}
