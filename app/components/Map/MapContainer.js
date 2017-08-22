import React from 'react'
import { connect } from 'react-redux'

import InitialMap from './Map'
import { setCoords } from '../../reducers/map-reducer'
import { fetchRests, clearRests } from '../../reducers/rest-reducer'
import { fetchZip } from '../../reducers/zip-reducer'
import { markBullseye } from '../../reducers/bullseye-reducer'
import { addLngLat } from '../../reducers/report'

class MapContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bounds: null,
      center: { lat: 40.753574, lng: -73.9835933 },
      markers: [],
      selectedMarker: {},
      restList: this.props.rests,
      selectedRestIndex: [],
      zip:[]
      }

      this.handleMapMounted = this.handleMapMounted.bind(this);
      this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
      this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
      this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
  }

  handleMapMounted(map) {
    console.log('handlemap running', map)
    this._map = map;
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    });
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox;
    console.log(this._searchBox.getPlaces)
  }

  handlePlacesChanged() {
    console.log("handle places changed running")
    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const markers = places.map(place => ({
      position: place.geometry.location,
    }));

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

    this.setState({
      center: mapCenter,
      markers,
    });
  }

  render() {
    const onMarkerClick = (rest, index) => {
      !this.state.selectedRestIndex.includes(index)
        ? this.setState({ selectedRestIndex: [index] })
        : null
    }

    const onMapClick = (e) => {
      this.props.addBullseye([e.latLng.lat(), e.latLng.lng()])
      this.props.setCoords(e.latLng.lat(), e.latLng.lng())
      this.setState({ selectedMarker: { lat: e.latLng.lat(), lng: e.latLng.lng() }, selectedRestIndex: []},
        () => {
          clearRests().then(makeYelpReq(this.state.selectedMarker.lat, this.state.selectedMarker.lng, Math.floor(this.props.radius))
        )
        }
      )
    }

    const clearRests = async () => {
      await this.props.clearRests()
    }

    const makeYelpReq = async (latitude, longitude, radius) => {
      let offset = 0
      let first = true
      const locationObj = { latitude, longitude, radius, term: this.props.bType, }
      this.props.fetchZip(locationObj)
      while (offset<950) {
        locationObj.offset = offset
        console.log('in map container location obj', locationObj)
        await this.props.fetchRests(locationObj)
        if (first) {
          offset = offset + 51
          first = false
        }
        else offset=offset+50

      }
    }
    return (
        <InitialMap
          containerElement={<div style={{ height: '100vh' }} />}
          mapElement={<div style={{ height: '100vh' }} />}

          center={this.state.center}
          onMapMounted={this.handleMapMounted}
          onBoundsChanged={this.handleBoundsChanged}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          bounds={this.state.bounds}
          onPlacesChanged={this.handlePlacesChanged}
          markers={this.state.markers}


          onMapClick={onMapClick}
          onMarkerClick={onMarkerClick}
          selectedMarker={this.state.selectedMarker}
          radius={this.props.radius || 0}
          restList={this.props.rests}
          selectedRestIndex={this.state.selectedRestIndex}
          markBullseye={markBullseye}
          zoom={this.props.map.zoom}
          threadList={this.props.threadList}
        />
    )
  }
}

const mapStateToProps = ({ radius, rests, bType, zip, map, threadList }) => ({ radius, rests, bType, zip, map, threadList })

const mapDispatchToProps = dispatch => ({
  fetchRests: (locationObj) => dispatch(fetchRests(locationObj)),
  fetchZip: (locationObj) => dispatch(fetchZip(locationObj)),
  addBullseye: (coordsArr, callback) => dispatch(markBullseye(coordsArr, callback)),
  addLngLat: (latitude, longitude) => dispatch(addLngLat(latitude, longitude)),
  clearRests: () => dispatch(clearRests()),
  setCoords: (x, y) => dispatch(setCoords(x, y))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
