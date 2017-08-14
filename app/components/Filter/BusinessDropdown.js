import React from 'react'
import { Input } from 'react-materialize'

const BusinessDropdown = (props) => {
	return (
		<Input s={12} type='select' label="Business Options" defaultValue='0'>
			<option disabled='disabled' value='0'> Select Type </option>
			<option value='1'>Convenience Store</option>
			<option value='2'>Restaurant</option>
			<option value='3'>Wash and Fold</option>
		</Input>
	)
}

export default BusinessDropdown