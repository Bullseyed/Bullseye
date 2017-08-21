import React from 'react';
import { Row } from 'react-materialize';
import Radius from './Radius';
import BusinessDropdown from './BusinessDropdown';
import SubmitRepBut from './SubmitRepBut';
import HowToUseBut from './HowToUseBut';

const Filter = () => {
	return (
		<div>
			<Row>
				<HowToUseBut />
				<BusinessDropdown />
			</Row>
			<Radius />
			<SubmitRepBut />
		</div>
	);
};

export default Filter;
