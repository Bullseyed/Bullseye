import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Icon, Button } from 'react-materialize';
import { fetchThreads } from '../../reducers/thread-reducer'
import SingleThread from './SingleThread'

 class Threads extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchThreads()
  }

  render() {
    return (
      <div style={{ paddingLeft: 23, paddingRight: 23 }}>
        <Collapsible accordion>
          {this.props.threadList.map(thread => {
            return (
              <CollapsibleItem key={thread.id}
                header={
                  <Row>
                    <Col l={5}>
                      {thread.idea}
                    </Col>
                    <Col l={1} offset='l4'>
                      <font color='green'> {thread.score} </font>
                    </Col>
                  </Row>
                }
                icon='track_changes'>
                <SingleThread thread={thread} />
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
