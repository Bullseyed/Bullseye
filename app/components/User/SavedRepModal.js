import React, { Component } from 'react'
import { Modal } from 'react-materialize'
import SavedRepModalContents from './SavedRepModalContents'
import { fetchReports } from '../../reducers/saved-report-reducer'
import { connect } from 'react-redux'


class SavedRepModal extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchReports(this.props.currentUser.id)
	}
	render() {
		return (
			<Modal
				header='Saved Searches'
				trigger={<h> Saved Reports </h>}>
				<SavedRepModalContents reports={this.props.reports} />
			</Modal>
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
export default connect(mapStateToProps, mapDispatchToProps)(SavedRepModal)
