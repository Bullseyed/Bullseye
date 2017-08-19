

// Action types

const SET_COORDS = 'SET_COORDS';
const SET_ZOOM = 'SET_ZOOM';


//Action Creators

export const setCoords = (x,y) => ({
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
      newState.selectedMarker.lat = action.x;
      newState.selectedMarker.lng = action.y;
      break;
    case SET_ZOOM:
      newState.zoom = action.zoom;
      break;
    default:
      return state
  }
  return newState
}

export default mapReducer;


//Thunks
