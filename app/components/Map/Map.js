import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Circle } from 'react-google-maps'

const InitialMap = withGoogleMap(props => (
	<GoogleMap
		ref={props.onMapLoad}
		defaultZoom={13}
		defaultCenter={{ lat: 40.753574, lng: -73.9835933 }}
		onClick={props.onMapClick}

	>
		<Marker
			position={props.selectedMarker}
		/>
			<Circle
			center={props.selectedMarker}
			radius={props.radius}
			onClick={props.clickedCircle}
			options={{
				fillColor: `red`,
				fillOpacity: 0.20,
				strokeColor: `red`,
				strokeOpacity: 1,
				strokeWeight: 1,
			}}
		/>
	</GoogleMap>

));

//container




export default InitialMap
