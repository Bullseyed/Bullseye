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
			votingDisabled: false
		};
		this.upvoteHandler = this.upvoteHandler.bind(this);
	}

	componentWillMount() {
		console.log(this.props);
		if (!this.props.currentUser) {
			this.setState({votingDisabled: true});
		} else if (this.props.thread.scoreAuthors &&
		    (this.props.thread.scoreAuthors.includes(this.props.currentUser.id))) {
					this.setState({votingDisabled: true});
		    }
	}

	upvoteHandler() {
		this.setState({votingDisabled: true});
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
						<Button floating large className='green' waves='light' icon='thumb_up' onClick={this.upvoteHandler} disabled={this.state.votingDisabled ? true : false}> Upvote </Button>
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

const mapStateToProps = ({ currentUser }) => ({ currentUser });

const mapDispatchToProps = dispatch => ({
	upvote: (threadObj) => dispatch(upvoteThread(threadObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleThread);