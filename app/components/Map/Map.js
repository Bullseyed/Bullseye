import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Circle } from 'react-google-maps'

const InitialMap = withGoogleMap(props => {

	const restList = props.restList

	return (
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={13}
			defaultCenter={{ lat: 40.753574, lng: -73.9835933 }}
			onClick={props.onMapClick}

		>
			<Marker
				position={props.selectedMarker}
			/>

			{restList && restList.map((rest, index) => {
				return (
					rest.distance <= props.radius
						? <Marker
							key={index}
							icon= {'ic_place_black_24px.svg'}
							onClick={() => props.onMarkerClick(rest, index)}
							position={{ lat: rest.coordinates.latitude, lng: rest.coordinates.longitude }}>
							{props.selectedRestIndex.includes(index) && (<InfoWindow>
								<div>
									<img style={{height:50, width:50}} src={rest.image_url}/>
									<h6>{rest.name}</h6>
									</div>
							</InfoWindow>)
							}
						</Marker>
						: null
				)
			})
			}

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

	)
}
)

export default InitialMap
