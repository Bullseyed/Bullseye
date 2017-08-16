import React from 'react'
import { Input } from 'react-materialize'
import SubRest from './SubDropdowns/SubRest'
import SubLaund from './SubDropdowns/SubLaund'
import { connect } from 'react-redux'
import { putBType } from '../../reducers/b-type-reducer'

class BusinessDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSubRest: false,
			showSubLaund: false,
		}
	}

	render() {
		const changeHandle = (event) => {
			const val = +event.target.value
			if (val === 2) {
				this.setState({ showSubRest: true, showSubLaund: false })
			}
			if (val === 3) {
				this.setState({ showSubRest: false, showSubLaund: true })
			}
		}
		return (
			<div>

				<Input s={12} type='select' label="Business Type" defaultValue='0' onChange={changeHandle}>
					<option disabled='disabled' value='0'> Select Business </option>
					<option value='2'>Restaurant</option>
					<option value='3'>Laundry</option>
				</Input>

				{this.state.showSubRest && <SubRest />}
				{this.state.showSubLaund && <SubLaund />}

			</div>
		)
	}
}

const mapStateToProps = storeState => ({ bType: storeState.bType })
const mapDispatchToProps = dispatch => ({ addBType: typeStr => dispatch(putBType(typeStr)) })
export default connect(mapStateToProps, mapDispatchToProps)(BusinessDropdown)
