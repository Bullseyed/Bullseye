import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Input, Button } from 'react-materialize';
import axios from 'axios';

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

    axios.post('/api/threads', postObj);
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
          <Button waves="light" onClick={this.handleSubmitClick}>Submit</Button>
        </CollapsibleItem>
     </Collapsible>
    );
  }
}

const mapStateToProps = ({bullseye}) => ({bullseye})

export default connect(mapStateToProps, null)(AddNew);
