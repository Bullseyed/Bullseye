import React, { Component } from 'react'
import { Col, Row, Button } from 'react-materialize'
import { fetchReports } from '../../reducers/saved-report-reducer'
import { connect } from 'react-redux'

class SavedList extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchReports(this.props.currentUser.id)
	}
	render() {
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
									<Button> Rerun </Button>
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
})
const mapDispatchToProps = dispatch => ({
	fetchReports: (currentUserId) => dispatch(fetchReports(currentUserId))
})
export default connect(mapStateToProps, mapDispatchToProps)(SavedList)
