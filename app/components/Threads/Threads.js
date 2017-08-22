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
        <Row style={{marginBottom: 5}}>
                    <Col l={1} style={{marginLeft: 5, marginRight: 5}}>
                      SCORE
                    </Col>
                    <Col l={9} style={{paddingRight: 0}}>
                      IDEA
                    </Col>
                    <Col l={1} style={{paddingLeft: 0}}>
                      POSTED
                    </Col>
          </Row>

        <Collapsible accordion>
          {this.props.threadList.map(thread => {
            return (
              <CollapsibleItem
                key={thread.id}
                header={
                  <Row style={{marginBottom: 0}}>
                    <Col l={1}>
                      <span className="badge green" style={{color: 'white', borderRadius: '20%', fontSize: 12}}>
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
