import React, { Component } from 'react'
import { Col, Row, Button } from 'react-materialize'
import { fetchReports } from '../../reducers/saved-report-reducer'
import { fetchRests, clearRests } from '../../reducers/rest-reducer'
import { fetchZip } from '../../reducers/zip-reducer'
import { demographicThunk } from '../../reducers/demo-reducer'
import { connect } from 'react-redux'
import fipsDict from '../../../fips-codes.js'
import { Link } from 'react-router-dom'
import { addLngLat } from '../../reducers/report'
import { fetchAddress } from '../../reducers/address-reducer'
import { updateRadius } from '../../reducers/radius-reducer'

class SavedList extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchReports(this.props.currentUser.id)
	}
	render() {
		const clickHandler = async (event) => {
			const reportId = event.target.value;
			const matchedReport = this.props.reports.filter(report => { return report.id == reportId })[0]
			const getFips = (state) => fipsDict[state]
			const yelpObj = {
				latitude: +matchedReport.latitude,
				longitude: +matchedReport.longitude,
				radius: Math.floor(+matchedReport.radius),
				term: matchedReport.businessType,
				offset: 0,
			}

			this.props.clearRests();
			this.props.fetchAddress({latitude: matchedReport.latitude, longitude: matchedReport.longitude})
			this.props.addLngLat(matchedReport.latitude, matchedReport.longitude)
			this.props.updateRadius(Math.floor(+matchedReport.radius))
			const rests = await this.props.fetchRests(yelpObj)
			const zips = await this.props.fetchZip(yelpObj)
			this.props.demographicThunk(zips.zip, getFips(rests.restList[0].location.state))
		}
		return (
			<div>
				{this.props.reports && this.props.reports.map(report => {
					return (
						<div>
							<Row>
								<Col s={9}>
									{report.address}
								</Col>
								<Col s={3}>
									<Link to='/report'><Button value={report.id} onClick={clickHandler}> Rerun </Button></Link>
								</Col>
							</Row>
							<hr />
						</div>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = storeState => ({
	reports: storeState.reports,
	currentUser: storeState.currentUser,
	rests: storeState.rests,
	demoData: storeState.demoData,
	zip: storeState.zip
})
const mapDispatchToProps = dispatch => ({
	fetchReports: (currentUserId) => dispatch(fetchReports(currentUserId)),
	demographicThunk: (zipArr, fipsCode) => dispatch(demographicThunk(zipArr, fipsCode)),
	fetchZip: (locationObj) => dispatch(fetchZip(locationObj)),
	fetchRests: (locationObj) => dispatch(fetchRests(locationObj)),
	clearRests: () => dispatch(clearRests()),
	addLngLat: (Lat, Lng) => dispatch(addLngLat(Lat,Lng)),
	fetchAddress: (locationObj) => dispatch(fetchAddress(locationObj)),
	updateRadius: (int) => dispatch(updateRadius(int))
})
export default connect(mapStateToProps, mapDispatchToProps)(SavedList)
