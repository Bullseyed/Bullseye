import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Icon, Button } from 'react-materialize';
import { fetchThreads } from '../../reducers/thread-reducer'
import SingleThread from './SingleThread'

const Threads = (props) => {
  return (
    <div style={{ paddingLeft: 23, paddingRight: 23 }}>
      <Collapsible accordion>
        {props.threadList.map(thread => {
          return (
            <CollapsibleItem key={thread.id}
              header={
                <Row>
                  <Col l={3}>
                    {thread.idea}
                  </Col>
                  <Col l={3} offset='l4'>
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

const mapStateToProps = ({ threadList }) => ({ threadList });

export default connect(mapStateToProps, { fetchThreads })(Threads);
