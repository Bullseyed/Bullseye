import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-materialize';
import { fetchComments } from '../../reducers/comment-reducer';


class Comments extends Component {

	componentWillMount() {
		this.props.fetchComments();
	}

	render() {
		return (
			<div>
				{this.props.comments.map(comment => {
					return (comment.threadId === this.props.thread.id)
					? (
							<div>
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
						)
					: null;
				})
			}
			</div>
		);
	}
}


const mapStateToProps = storeState => ({
	comments: storeState.comments
});


export default connect(mapStateToProps, { fetchComments })(Comments);
