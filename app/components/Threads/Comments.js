import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-materialize';

const Comments = props => {
	return (
		<div>
			{props.thread.comments ? props.thread.comments.map(comment => {
				return (
					<div key={comment.id}>
						<Row>
							<Col l={10} style={{ padding: 0 }}>
								{comment.comment}
							</Col>
							<Col l={1} style={{ padding: 0, float: 'right'}}>
								{comment.date}
							</Col>
						</Row>
						<hr />
					</div>
				);
			})
			:
			null
		}
		</div>
	);
};

const mapStateToProps = storeState => ({
	comments: storeState.comments
});

export default connect(mapStateToProps, null)(Comments);
