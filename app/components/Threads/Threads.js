import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import { fetchThreads } from '../../reducers/thread-reducer'

class Threads extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchThreads();
  }


  render() {
    console.log(this.props);
    return (
      <div style={{ paddingLeft: 23, paddingRight: 23 }}>
        <Collapsible accordion>
          {this.props.threadList.map(thread => {
            return (
              <CollapsibleItem key={thread.id} 
              header={
                <Row>
                  <Col l={3}>
                  {thread.idea}
                  </Col> 
                  <Col l={3} offset='l4'>
                  <font color ='green'> {thread.score} </font>
                  </Col>
                </Row>
                } 
              icon='track_changes'>
                <p> <b> Description </b> </p>
                <p> {thread.description} </p>
              </CollapsibleItem>
            )
          })
          }
        </Collapsible>
      </div>
    );
  }
}

const mapStateToProps = ({ threadList }) => ({ threadList });

export default connect(mapStateToProps, { fetchThreads })(Threads);
