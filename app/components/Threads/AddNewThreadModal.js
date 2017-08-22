import React from 'react'
import { Row, Col, Collapsible, CollapsibleItem, Input, Button, Modal } from 'react-materialize';
import { connect } from 'react-redux'
import { postThread } from '../../reducers/thread-reducer'

const AddNewThreadModal = (props) => {

	const handleSubmitClick = () => {
		const postObj = {
      latitude: props.bullseye[0],
      longitude: props.bullseye[1],
      idea: document.getElementById('busIdea').value,
      description: document.getElementById('desc').value
    };
    props.postThread(postObj)

  }

	return (
    <div>
			<Row>
				<Input
					id='busIdea'
					s={12}
					label="Business Idea"
				/>
			</Row>
			<Row>
				<Input
					id='desc'
					type='textarea'
					s={12}
					label="Description"
				/>
			</Row>
			<Button waves="light" onClick={handleSubmitClick}>Submit</Button>
		</div>
	)
}

const mapStateToProps = ({ bullseye, threads }) => ({ bullseye, threads })
const mapDispatchToProps = dispatch => ({
  postThread: (threadObj) => dispatch(postThread(threadObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewThreadModal);

