import React from 'react'
import { demographicThunk } from '../../reducers/demo-reducer'
import { fetchRests } from '../../reducers/rest-reducer'
import { fetchZip } from '../../reducers/zip-reducer'
import fipsDict from '../../../fips-codes.js';
import { connect } from 'react-redux'

class ReranSearch extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		const getFips = (state) => fipsDict[state];
		const report = this.props.report
		const yelpObj = {
			latitude: report.latitude,
			longitude: report.longitude,
			radius: report.radius,
			term: report.businessType || 'resturants',
		}

		this.props.fetchRests(yelpObj)
	}

	render() {

		return (
			<div> Hi Jack :) </div>
		)
	}
}

const mapStateToProps = storeState => ({
	rests: storeState.rests,
	demoData: storeState.demoData,
	zip: storeState.zip

})
const mapDispatchToProps = dispatch => ({
	demographicThunk: (zipArr, fipsCode) => dispatch(demographicThunk(zipArr, fipsCode)),
	fetchZip: (locationObj) => dispatch(fetchZip(locationObj)),
	fetchRests: (locationObj) => dispatch(fetchRests(locationObj)),

})

export default connect (mapDispatchToProps, mapDispatchToProps)(ReranSearch)