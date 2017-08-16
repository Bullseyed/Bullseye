import axios from 'axios';
// import { create as createUser } from './users';
// import history from '../history';

/* ------------------    ACTIONS    --------------------- */

const SET    = 'SET_CURRENT_USER';
const REMOVE = 'REMOVE_CURRENT_USER';

/* --------------    ACTION CREATORS    ----------------- */

const set     = user => ({ type: SET, user });
const remove  = () => ({ type: REMOVE });

/* ------------------    REDUCER    --------------------- */

export default function reducer (currentUser = null, action) {
  switch (action.type) {

    case SET:
      return action.user;

    case REMOVE:
      return null;

    default:
      return currentUser;
  }
}

/* ------------       THUNK CREATORS ------------------ */

/**
 * Thunk creators are just async action creators.
 * Action creators are supposed to emit actions.
 * Actions will be reduced to produce a new state.
 *
 * However, thunks can also do side effects, such as route to another location.
 * This could get fairly elaborate, by taking arguments as to where to go, or
 * whether to change routes at all. But we illustrate a simple case with some
 * composed thunk creators which also route to a specific page.
 *
 * If we wanted the calling code (component) to handle the result instead, we
 * would use the "simple" thunk creator and chain off the returned promise.
 * Components should probably know nothing about side effects, however.
 */

const resToData = res => res.data;

// a "simple" thunk creator which uses API, changes state, and returns a promise.
export const login = credentials => dispatch => {
  return axios.put('/api/auth/me', credentials)
  .then(resToData)
  .then(user => {
    dispatch(set(user));
    return user;
  });
};

// a "composed" thunk creator which uses the "simple" one, then routes to a page.
// export const loginAndGoToUser = credentials => dispatch => {
//   dispatch(login(credentials))
//   .then(user => history.push(`/users/${user.id}`))
//   .catch(err => console.error('Problem logging in:', err));
// };
//
// export const signup = credentials => dispatch => {
//   return axios.post('/api/auth/me', credentials)
//   .then(resToData)
//   .then(user => {
//     dispatch(createUser(user)); // so new user appears in our master list
//     dispatch(set(user)); // set current user
//     return user;
//   });
// };

// export const signupAndGoToUser = credentials => dispatch => {
//   dispatch(signup(credentials))
//   .then(user => history.push(`/users/${user.id}`))
//   .catch(err => console.error('Problem signing up:', err));
// };

export const retrieveLoggedInUser = () => dispatch => {
  axios.get('/api/me')
  .then(res => dispatch(set(res.data)))
  .catch(err => console.error('Problem fetching current user', err));
};

// optimistic
// export const logout = () => dispatch => {
//   dispatch(remove());
//   axios.delete('/api/auth/me')
//   .catch(err => console.error('logout unsuccessful', err));
// };
