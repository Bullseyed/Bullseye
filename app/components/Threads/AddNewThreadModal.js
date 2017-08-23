import React, { Component } from 'react'
import { Row, Col, Collapsible, CollapsibleItem, Input, Button, Modal } from 'react-materialize';
import { connect } from 'react-redux'
import { postThread } from '../../reducers/thread-reducer'

class AddNewThreadModal extends Component {

  constructor() {
    super()
    this.state = {
      busIdea: '',
      desc: ''
    }
  }

  render() {

  	const handleSubmitClick = () => {
  		const postObj = {
        latitude: this.props.bullseye[0],
        longitude: this.props.bullseye[1],
        idea: this.state.busIdea,
        description: this.state.desc
      };
      this.props.postThread(postObj)
      this.setState({busIdea: '', desc: ''})
    };

    const handleBusChange = (event) => {
      this.setState({busIdea: event.target.value})
    };

    const handleDescChange = (event) => {
      this.setState({desc: event.target.value})
    };

  	return (
      <Row>
  			<Row>
  				<Input
            value={this.state.busIdea}
  					id='busIdea'
  					s={12}
  					label="Business Idea"
            onChange={handleBusChange}
  				/>
  			</Row>
  			<Row>
  				<Input
            value={this.state.desc}
  					id='desc'
  					type='textarea'
  					s={12}
  					label="Description"
            onChange={handleDescChange}
  				/>
  			</Row>
  			<Button waves="light" modal='close' onClick={handleSubmitClick}>Submit</Button>
        </Row>
  	)
  }
}

const mapStateToProps = ({ bullseye, threads }) => ({ bullseye, threads })
const mapDispatchToProps = dispatch => ({
  postThread: (threadObj) => dispatch(postThread(threadObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewThreadModal);

