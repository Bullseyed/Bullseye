import React from 'react'
import { Modal, Button } from 'react-materialize'
import ReranSearch from './ReranSearch'

const RerunModal = (props) => {
	const report = props.report
	const clicker = () => console.log('hi')
	return (
		<Modal
			header='Modal Header'
			trigger={<Button onClick={clicker}>Rerun</Button>}>
			<ReranSearch report={report}/>
		</Modal>
	)
}

export default RerunModal