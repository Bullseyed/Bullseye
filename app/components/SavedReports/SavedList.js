import React, { Component } from 'react'
import { Col, Row, Button } from 'react-materialize'
import { fetchReports } from '../../reducers/saved-report-reducer'
import { fetchRests } from '../../reducers/rest-reducer'
import { connect } from 'react-redux'

class SavedList extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchReports(this.props.currentUser.id)
	}
	render() {
		const clickHandler = (event) => {

			const reportId = event.target.value;

			const matchedReport = this.props.reports.filter(report => { return report.id == reportId })[0]
			console.log(matchedReport)

			const getFips = (state) => fipsDict[state]
			const yelpObj = {
				latitude: +matchedReport.latitude,
				longitude: +matchedReport.longitude,
				radius: Math.floor(+matchedReport.radius),
				term: matchedReport.businessType,
				offset: 0,
			}
			console.log(yelpObj)

			this.props.fetchRests(yelpObj)
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
									<Button value={report.id} onClick={clickHandler}> Rerun </Button>
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
})
export default connect(mapStateToProps, mapDispatchToProps)(SavedList)
