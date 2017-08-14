import React from 'react'
import { Input, Row, Icon } from 'react-materialize'
import Radius from './Radius'
import BusinessDropdown from './BusinessDropdown'
import Checkboxes from './Checkboxes'
import Submit from './Submit'

const Filter = (props) => {
	return (
		<div>
			<BusinessDropdown />
			<Radius />
			<Checkboxes />
			{/* <Submit /> */}
		</div>
	)
}

export default Filter
