import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Icon, Button } from 'react-materialize';

import { fetchThreads, sortThreads } from '../../reducers/thread-reducer';
import SingleThread from './SingleThread';

 class Threads extends Component {
  constructor() {
    super()
    this.handleThreadSort = this.handleThreadSort.bind(this);
  }

  componentDidMount() {
    this.props.fetchThreads()
  }

  handleThreadSort() {
    const threadListCopy1 = this.props.threadList.slice();
    const threadListCopy2 = this.props.threadList.slice()
    const sortedDescending = threadListCopy1.sort((a, b) => {
        return b.score - a.score;
      });
    const sortedAscending = threadListCopy2.sort((a, b) => {
      return a.score - b.score;
    });

    this.props.threadList[0].score > this.props.threadList[this.props.threadList.length - 1].score ?
      this.props.sortThreads(sortedAscending)
      :
      this.props.sortThreads(sortedDescending)
  }

  render() {
    return (
      <div style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Row style={{marginBottom: 5}}>
                    <Col l={1} style={{paddingLeft: '10px', paddingRight: '0px'}}>
                      <a href="#" style={{color: 'black'}} onClick={this.handleThreadSort}><span><strong>SCORE</strong>
                      {
                        this.props.threadList.length && this.props.threadList[0].score > this.props.threadList[this.props.threadList.length - 1].score ?
                          <Icon tiny>arrow_upward</Icon>
                          :
                          <Icon tiny>arrow_downward</Icon>}
                      </span></a>
                    </Col>
                    <Col l={8} style={{paddingRight: 0}}>
                      BUSINESS
                    </Col>
                    <Col l={1} offset='l1' style={{paddingLeft: 0}}>
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

export default connect(mapStateToProps, { fetchThreads, sortThreads })(Threads);
