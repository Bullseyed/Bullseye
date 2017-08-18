import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-materialize'


const Location = (props) => {
	return (
		<Row>
		<h> <b>Location:</b> {props.bullseyeLocation.join(', ')}</h>
		</Row>
	)
}

const mapStateToProps = storeState => ({
	bullseyeLocation: storeState.bullseye
})

export default connect (mapStateToProps,null)(Location)

