import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Input, Button } from 'react-materialize';
import axios from 'axios';
import { postThread } from '../../reducers/thread-reducer'
import { Link } from 'react-router-dom'

class AddNew extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
  }

  handleSubmitClick() {
    const postObj = {
      latitude: this.props.bullseye[0],
      longitude: this.props.bullseye[1],
      idea: document.getElementById('busIdea').value,
      description: document.getElementById('desc').value
    };

    this.props.postThread(postObj)
  }

  render() {
    return (
     <Collapsible popout defaultActiveKey={1}>
        <CollapsibleItem header='Propose a Business' icon='add_circle_outline'>
          <Row>
            <h6>First find a place for your amazing idea choose a location on the map and off you go</h6>
          </Row>
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
          <Link to='/threads'> <Button waves="light" onClick={this.handleSubmitClick}>Submit</Button> </Link>
        </CollapsibleItem>
     </Collapsible>
    );
  }
}

const mapStateToProps = ({bullseye, threads}) => ({bullseye, threads})
const mapDispatchToProps = dispatch => ({
  postThread: (threadObj) => dispatch(postThread(threadObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);
