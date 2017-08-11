import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'

const InitialMap = withGoogleMap(props => (
	  <GoogleMap
	    ref={props.onMapLoad}
	    defaultZoom={13}
	    defaultCenter={{ lat: 40.753574, lng: -73.9835933 }}
	    onClick={props.onMapClick}
	  >
		<Marker defaultPosition={{ lat: 1, lng: 1 }} />
	  </GoogleMap>
));

//container



export default InitialMap