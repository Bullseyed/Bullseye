import React from 'react'
import { Input, Row, Icon } from 'react-materialize'
import Radius from './Radius'
import BusinessDropdown from './BusinessDropdown'

const Filter = (props) => {
	return (
		<Row>
			<BusinessDropdown />
			<Radius />
		</Row>
	)
}

export default Filter