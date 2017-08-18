import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-materialize'


const Zips = (props) => {
	return (
		<Row>
		<h> <b>Included Zipcodes: </b> {props.zips.join(', ')}</h>
		</Row>
	)
}

const mapStateToProps = storeState => ({
	zips: storeState.zip
})
export default connect (mapStateToProps,null)(Zips)