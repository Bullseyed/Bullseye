import React from 'react'
import { Input, Row, Icon, Col } from 'react-materialize'
import Radius from './Radius'
import BusinessDropdown from './BusinessDropdown'
import SubmitRepBut from './SubmitRepBut'

const Filter = (props) => {
	return (
		<div>
			<Row>
				<BusinessDropdown />
			</Row>
			<Radius />
			<SubmitRepBut />
		</div>
	)
}

export default Filter
