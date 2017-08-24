import React from 'react';
import { Row } from 'react-materialize';
import Radius from './Radius';
import BusinessDropdown from './BusinessDropdown';
import SubmitRepBut from './SubmitRepBut';

const Filter = () => {
	return (
		<div>

				<p style={{paddingLeft: 10, marginBottom: 5, color: '#af0000'}}>
					<b> Step 1: </b> Select a business type and sub-type
				</p>
				<BusinessDropdown />

			<p style={{paddingLeft: 10, marginTop: 15, marginBottom: 0, color: '#af0000'}}>
				<b> Step 2: </b> Select a radius to analyze
			</p>
			<Radius />

			<p style={{paddingLeft: 10, marginBottom: 5, marginTop: 0, color: '#af0000'}}>
				<b> Step 3: </b> Click the map to select location
			</p>
			<div className='center-align' style={{paddingTop: 30}}>
				<SubmitRepBut />
			</div>
		</div>
	);
};

export default Filter;
