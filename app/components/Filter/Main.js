import React from 'react'
import { Input, Row, Icon, Col } from 'react-materialize'
import Radius from './Radius'
import BusinessDropdown from './BusinessDropdown'
import Checkboxes from './Checkboxes'
import SubmitRepBut from './SubmitRepBut'

const Filter = (props) => {
	return (
		<div>
			<Row>
			<BusinessDropdown />
			</Row>
			<Radius />
			<Checkboxes />
			<SubmitRepBut />
		</div>
	)
}

export default Filter
