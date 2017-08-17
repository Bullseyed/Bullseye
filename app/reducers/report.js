import axios from 'axios';

import { updateRadius } from './radius-reducer';
import { addBType } from './b-type-reducer';
import { markBullseye } from './bullseye-reducer';
// import { create as createUser } from './users';
// import history from '../history';

/* ------------------    ACTIONS    --------------------- */

const ADD_B_TYPE = 'ADD_B_TYPE';
const MARK_BULLSEYE = 'MARK_BULLSEYE';
const UPDATE_RADIUS = 'UPDATE_RADIUS';
const TOGGLE_CRIME_CHECKBOX = 'TOGGLE_CRIME_CHECKBOX';
const TOGGLE_DEMO_CHECKBOX = 'TOGGLE_DEMO_CHECKBOX';
const TOGGLE_INCOME_CHECKBOX = 'TOGGLE_INCOME_CHECKBOX';
const TOGGLE_POP_CHECKBOX = 'TOGGLE_POP_CHECKBOX';


/* --------------    ACTION CREATORS    ----------------- */

const toggleCrimeCheckbox = () => ({
  type: TOGGLE_CRIME_CHECKBOX
});

const toggleDemoCheckbox = () => ({
  type: TOGGLE_DEMO_CHECKBOX
});

const toggleIncomeCheckbox = () => ({
  type: TOGGLE_INCOME_CHECKBOX
});

const togglePopCheckbox = () => ({
  type: TOGGLE_POP_CHECKBOX
});

export const checkboxesHandler = (event, dispatch) => {
  switch (event.target.value) {
    case 'crime':
      dispatch(toggleCrimeCheckbox());
      break;
    case 'demo':
      dispatch(toggleDemoCheckbox());
      break;
    case 'income':
      dispatch(toggleIncomeCheckbox());
      break;
    case 'population':
      dispatch(togglePopCheckbox());
      break;
    default:
  }
};

/* ------------------    REDUCER    --------------------- */

export default function reducer (state = {
  longitude: null,
  latitude: null,
  radius: null,
  businessType: null,
  crimeChecked: false,
  demographicsChecked: false,
  incomeChecked: false,
  popDensityChecked: false
}, action) {
  switch (action.type) {
    case ADD_B_TYPE:
      state.businessType = action.typeStr;
      break;
    case TOGGLE_CRIME_CHECKBOX:
      state.crimeChecked = !state.crimeChecked;
      break;
    case TOGGLE_DEMO_CHECKBOX:
      state.demographicsChecked = !state.demographicsChecked;
      break;
    case TOGGLE_INCOME_CHECKBOX:
      state.incomeChecked = !state.incomeChecked;
      break;
    case TOGGLE_POP_CHECKBOX:
      state.popDensityChecked = !state.popDensityChecked;
      break;
    case MARK_BULLSEYE:
      state.longitude = action.coordsArr[0];
      state.latitude = action.coordsArr[1];
      break;
    case UPDATE_RADIUS:
      state.radius = action.radObj.value;
      break;
    default:
      return state;
  }
  return state;
}
