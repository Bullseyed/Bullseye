import React from 'react'
import { fetchReports } from '../../reducers/saved-report-reducer'
import { connect } from 'react-redux'

class SavedRepModalContents extends React.Component {
	constructor(props) {
		super(props)
		this.state={}
	}
	componentWillMount() {
		this.props.fetchReports(this.props.currentUser.id)
	}
	render() {
		return (
			<div>
				{this.props.reports.map(report => {
					return (
						<div> {report.radius} </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SavedRepModalContents)

