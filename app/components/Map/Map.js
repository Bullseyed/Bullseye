import React from 'react'
import { withGoogleMap, GoogleMap, InfoWindow, Marker, Circle } from 'react-google-maps'
import { Modal, Row, Col } from 'react-materialize'
import SingleThread from '../Threads/SingleThread'
import SearchBox from 'react-google-maps/lib/places/SearchBox'

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
	const proposedBusiness = {
		url: 'proposedmarker.png',
		scaledSize: new google.maps.Size(18, 18),
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(0, 9) // anchor
	};

	const INPUT_STYLE = {
	  boxSizing: `border-box`,
	  MozBoxSizing: `border-box`,
	  border: `1px solid transparent`,
	  width: `240px`,
	  height: `32px`,
	  marginTop: `9px`,
	  padding: `0 12px`,
	  borderRadius: `1px`,
	  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
	  fontSize: `14px`,
	  outline: `none`,
	  textOverflow: `ellipses`,
		backgroundColor: 'white'
	};

	console.log(SearchBox)

const InitialMap = withGoogleMap(({ markBullseye, restList, onMapClick, selectedMarker, radius, selectedRestIndex, onMarkerClick, zoom, threadList }) => { //destructer

	return (
		<GoogleMap
			zoom={zoom}
			defaultCenter={{ lat: 40.753574, lng: -73.9835933 }}
			onClick={onMapClick}
		>
		<SearchBox
			inputPlaceholder="Search here..."
			inputStyle={INPUT_STYLE}
			className="searchbar"
			controlPosition={google.maps.ControlPosition.TOP_LEFT}
		/>
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
							key={rest.id}
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

			{threadList && threadList.map((thread, index) => {
				return (
					<Marker
						key={thread.id}
						icon={proposedBusiness}
						onClick={() => onMarkerClick(thread, index)}
						position={{ lat: thread.latitude, lng: thread.longitude }}>
						{selectedRestIndex.includes(index) &&
							(<InfoWindow>
								<Modal
									trigger={
										<div>
												<h5>{thread.idea}</h5>
												<h6>{thread.description}</h6>
												<h6>click for details</h6>
										</div>
									}>
									<SingleThread thread={thread}/>
									</Modal>
							</InfoWindow>)
						}
					</Marker>
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

export default InitialMap;
