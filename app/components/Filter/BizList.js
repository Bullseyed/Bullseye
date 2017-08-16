import React from 'react'
import { Row, Col, Collection, CollectionItem } from 'react-materialize'
import { connect } from 'react-redux'

const BizList = (props) => {
	return (
		<Row>
			<Collection>
				{props.rests.map(rest=>{
					console.log(rest)
					return (
						<CollectionItem key={rest.id}> {rest.name} {rest.price} {rest.rating} </CollectionItem>
					)
				})}
			</Collection>
		</Row>
	)
}
const mapStateToProps = ({ rests }) => ({ rests })

export default connect(mapStateToProps, null)(BizList)