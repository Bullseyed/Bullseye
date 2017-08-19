import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import { fetchThreads } from '../../reducers/thread-reducer'

class Threads extends Component {
  constructor (props) {
    super (props)
  }

  componentDidMount() {
    this.props.fetchThreads();
  }


  render() {
    console.log(this.props);
    return (
     <div style={{paddingLeft: 23, paddingRight: 23}}>
     <Collapsible accordion>
        <CollapsibleItem header='sddsd' icon='track_changes'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Fresh Fish Mongering' icon='track_changes'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Cleaning Supplies Broker' icon='track_changes'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
     </Collapsible>
     </div>
    );
  }
}

const mapStateToProps = ({threads}) => ({threads});

export default connect(mapStateToProps, {fetchThreads})(Threads);
