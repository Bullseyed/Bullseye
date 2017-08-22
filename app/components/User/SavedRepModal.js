import React from 'react'
import {Modal} from 'react-materialize'
import SavedRepModalContents from './SavedRepModalContents'

const SavedRepModal = () => {
	return (
		<Modal
		header='Propose a Business'
		trigger={<h> Saved Reports </h>}>
		<SavedRepModalContents/>
	</Modal>
	)
}

export default SavedRepModal