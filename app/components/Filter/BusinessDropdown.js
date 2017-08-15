import React from 'react'
import { Input } from 'react-materialize'
import SubRest from './SubDropdowns/SubRest'
import SubLaund from './SubDropdowns/SubLaund'

class BusinessDropdown extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			showSubRest: false,
			showSubLaund: false,
		}
		this.changeHandle = this.changeHandle.bind(this)
	}
	changeHandle(event){
		const val = event.target.value
		if (val == 2) {
			this.setState({showSubRest: true})
			this.setState({showSubLaund: false})
		}
		if (val == 3) {
			this.setState({showSubRest: false})
			this.setState({showSubLaund: true})
		}
	}

	render(){
	return (
		<div>

		<Input s={12} type='select' label="Business Type" defaultValue='0' onChange={this.changeHandle}>
			<option disabled='disabled' value='0'> Select Business </option>
			<option value='2'>Restaurant</option>
			<option value='3'>Laundry</option>
		</Input>

		{ this.state.showSubRest && <SubRest /> }
		{ this.state.showSubLaund && <SubLaund /> }

		</div>
	)
}
}

export default BusinessDropdown
