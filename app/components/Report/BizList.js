import React from 'react'
import { Row, Col, Collection, CollectionItem, Modal, Icon } from 'react-materialize'
import { connect } from 'react-redux'

const BizList = (props) => {
	return (
		<Row>
			<Row> <b> Nearby Businesses: </b> </Row>
			<Row style={{ paddingTop: 0, paddingBottom: 0 }}>
				<Col s={6}>
					<b> Name </b>
				</Col>
				<Col s={2}>
					<b> Price </b>
				</Col>
				<Col s={2}>
					<b> Rating </b>
				</Col>
				<Col s={2}>
					<b> Distance </b>
				</Col>
			</Row>
			{props.rests.length &&
				<div>
					{props.rests.map(rest => {
						return rest.distance <= props.radius ?
							<Row key={rest.id} style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 0 }}>
								<Modal
									header={rest.name}
									trigger={
										<Row>
											<Col s={6}>
												{rest.name}
											</Col>
											<Col s={2}>
											 {rest.price}
											</Col>
											<Col s={2}>
											 {`${rest.rating}/5`}
											</Col>
											<Col s={2}>
											 { props.report.distanceMeasurement === 'miles' ? `${(+rest.distance / 1609.344).toFixed(2)} mi` : `${(+rest.distance / 1000).toFixed(2)} km`}
											</Col>
										</Row>

									}>
									<Row>
										<Col s={6}>
											<img src={rest.image_url} style={{ width: "100%", height: "100%" }} />
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
							</Row>
							: null
					})}
				</div>
			}
		</Row>
	)
}

const mapStateToProps = ({ rests, radius, report }) => ({ rests, radius, report })

export default connect(mapStateToProps, null)(BizList)
