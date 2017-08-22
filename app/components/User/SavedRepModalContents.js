import React from 'react'
import { Button, Row, Col } from 'react-materialize';


const SavedRepModalContents = (props) => {
	return (
		<div>
			{props.reports && props.reports.map(report => {
				return (
					<div>
						<Row>
							<Col s={9}>
								{report.address}
							</Col>
							<Col s={3}>
								<Button>Rerun</Button>
							</Col>
						</Row>
						<hr />
					</div>

				)
			})}
		</div>
	)
}


export default SavedRepModalContents

