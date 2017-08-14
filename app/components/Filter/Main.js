import React from 'react'
import { Input, Row, Icon } from 'react-materialize'
import Radius from './Radius'

const Filter = (props) => {
	return (
		<Row>
			<Input s={12} type='select' label="Example Filter" defaultValue='2'>
				<option value='1'>Option 1</option>
				<option value='2'>Option 2</option>
				<option value='3'>Option 3</option>
			</Input>
			<Radius />
		</Row>
	)
}

export default Filter