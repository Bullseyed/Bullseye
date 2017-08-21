import React from 'react';
import { Row } from 'react-materialize';

const Zips = ({zips}) => {
	return (
		<Row>
		  <h>
        <b>Included Zipcodes: </b> {zips}
      </h>
		</Row>
	);
};

export default Zips;
