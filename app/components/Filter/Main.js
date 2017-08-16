import React from 'react'
import { Input, Row, Icon, Col } from 'react-materialize'
import Radius from './Radius'
import BusinessDropdown from './BusinessDropdown'
import Checkboxes from './Checkboxes'
import SubmitRepBut from './SubmitRepBut'
import BizList from './BizList'

const Filter = (props) => {
	return (
		<div>
			<Row>
				<BusinessDropdown />
			</Row>
			<Radius />
			<Checkboxes />
			<div style={{overflow: 'auto', height:200}}>
				<BizList />
			</div>
			<SubmitRepBut />
		</div>
	)
}

export default Filter
