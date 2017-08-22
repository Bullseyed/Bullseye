import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
import { connect } from 'react-redux';
import { upvoteThread } from '../../reducers/thread-reducer';
import Comments from './Comments';
import AddComment from './AddComment';

class SingleThread extends Component {
	constructor() {
		super();
		this.state = {
			alreadyVoted: false
		};
		this.upvoteHandler = this.upvoteHandler.bind(this);
	}

	upvoteHandler() {
		this.setState({alreadyVoted: true});
		this.props.upvote(this.props.thread);
	}

	render() {
		return (
			<div>
				<Row>
					<Col l={9} style={{padding: 0}}>
						<Row>
							<b> Description: </b>
						</Row>
						<Row style={{fontSize: 16}}>
							{this.props.thread.description}
						</Row>
					</Col>
					<Col l={1} style={{float: 'right'}}>
						<Button floating large className='green' waves='light' icon='thumb_up' onClick={this.upvoteHandler} disabled={this.state.alreadyVoted ? true : false}> Upvote </Button>
					</Col>
				</Row>
				<Row>
					<b> Comments: </b>
				</Row>
				<Row  style={{fontSize: 12}}>
					<Comments thread={this.props.thread} />
				</Row>
				<Row>
					<AddComment thread={this.props.thread} />
				</Row>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	upvote: (threadObj) => dispatch(upvoteThread(threadObj))
});

export default connect(null, mapDispatchToProps)(SingleThread);
