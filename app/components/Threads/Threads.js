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
              <CollapsibleItem
                key={thread.id}
                header={
                  <Row>
                    <Col l={1}>
                      <span className="new badge green">
                        {thread.score}
                      </span>
                    </Col>
                    <Col l={9}>
                      {thread.idea}
                    </Col>
                    <Col l={1}>
                      {thread.date}
                    </Col>
                  </Row>
                }
              >
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
