

// Action types

const SET_COORDS = 'SET_COORDS';
const SET_ZOOM = 'SET_ZOOM';


//Action Creators

export const setCoords = (x, y) => ({
  type: SET_COORDS,
  x,
  y
})

export const setZoom = (zoom) => ({
  type: SET_ZOOM,
  zoom
})


//Reducer

function mapReducer (state = {zoom: 13}, action) {
  const newState = Object.assign(state)
  switch (action.type){
    case SET_COORDS:
      return Object.assign(newState, {selectedMarker: {lat: action.x, lng: action.y}})
    case SET_ZOOM:
      return Object.assign(newState, {zoom: action.zoom})
    default:
      return state
  }
}

export default mapReducer;


//Thunks
