import React from 'react'
import { Row, Col, Collection, CollectionItem, Modal, Icon } from 'react-materialize'
import { connect } from 'react-redux'

const BizList = (props) => {
	// const radius = props.radius.value
	return (
		<Row>
			<Row> <b> Nearby Businesses: </b> </Row>
			<Row>
				<Col s={4}>
					<b> Name </b>
				</Col>
				<Col s={4}>
					<b> Price Rating </b>
				</Col>
				<Col s={4}>
					<b> Rating </b>
				</Col>
			</Row>
			{props.rests &&
				<Collection>
					{props.rests.map(rest => {
						return rest.distance <= props.radius.value ?
							< Row >
								<Col s={4}>
									{rest.name}
								</Col>
								<Col s={4}>
									{rest.price}
								</Col>
								<Col s={4}>
									{rest.rating}
								</Col>
							</Row>

							: null



						{/* ? <CollectionItem key={rest.id}>
								<Modal
									header={rest.name}
									trigger={<h>{rest.name}</h>}>
									<Row>
										<Col s={6}>
											<img src={rest.image_url} style={{width:"100%", height: "100%"}} />
										</Col>
										<Col s={6}>
										<p> <b> Distance: </b> {rest.distance} </p>
										<p> <b> Address: </b>{rest.location.display_address.join(', ')} </p>
										<p> <b> Phone Number:</b> {rest.phone} </p>
										<p> <b> Rating: </b>{rest.rating} </p>
										<p> <b> Price Rating:</b> {rest.price} </p>


										</Col>
									</Row>
								</Modal>
							</CollectionItem>
							: null */}
					})}
				</Collection>
			}
		</Row>
	)
}

const mapStateToProps = ({ rests, radius }) => ({ rests, radius })

export default connect(mapStateToProps, null)(BizList)
