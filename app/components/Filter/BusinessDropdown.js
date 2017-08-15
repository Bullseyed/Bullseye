import React from 'react'
import { Input } from 'react-materialize'

class BusinessDropdown extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			showRestType: false,
		}
		this.changeHandle = this.changeHandle.bind(this)
	}
	changeHandle(event){
		console.log('firing')
		this.setState({showRestType: true,})
	}

	render(){
	return (
		<div>
		<Input s={12} type='select' label="Business Options" defaultValue='0' onChange={this.changeHandle}>
			<option disabled='disabled' value='0'> Select Business </option>
			<option value='1'>Convenience Store</option>
			<option value='2'>Restaurant</option>
			<option value='3'>Wash and Fold</option>
		</Input>

		{this.state.showRestType &&
			<Input s={12} type='select' label="Type" defaultValue='0'>
			<option disabled='disabled' value='0'> Select Type </option>
			<option value='1'>Chinese</option>
			<option value='2'>Japanese</option>
			<option value='3'>Mexican</option>
		</Input>
		}
		</div>
	)
}
}

export default BusinessDropdown
