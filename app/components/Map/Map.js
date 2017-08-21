import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Circle } from 'react-google-maps'

const InitialMap = withGoogleMap(({ markBullseye, restList, onMapLoad, onMapClick, selectedMarker, radius, selectedRestIndex, onMarkerClick, zoom }) => { //destructer

	const iconBullseye = {
		url: '143958.png',
		scaledSize: new google.maps.Size(22, 22),
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(11, 11) // anchor
	};
	const iconBusiness = {
		url: '249689.png',
		scaledSize: new google.maps.Size(18, 18),
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(0, 9) // anchor
	};


	return (

		<GoogleMap
			ref={onMapLoad}
			zoom={zoom}
			defaultCenter={{ lat: 40.753574, lng: -73.9835933 }}
			onClick={onMapClick}

		>
			<Marker
				position={selectedMarker}
				icon={iconBullseye}
			/>

			{restList && restList.map((rest, index) => {
				{/* do i need restlist && */ }
				{/* good place for &&? line 36*/ }
				return (
					rest.distance <= radius
						? <Marker
							key={index}
							icon={iconBusiness}
							onClick={() => onMarkerClick(rest, index)}
							position={{ lat: rest.coordinates.latitude, lng: rest.coordinates.longitude }}>
							{selectedRestIndex.includes(index) && (<InfoWindow>
								<div>
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
				center={selectedMarker}
				radius={radius}
				onClick={markBullseye}
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
