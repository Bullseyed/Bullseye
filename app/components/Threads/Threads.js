import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem, Icon } from 'react-materialize';

class Threads extends Component {
  constructor() {
    super()
  }


  render() {
    return (
     <div style={{paddingLeft: 23, paddingRight: 23}}>
     <Collapsible accordion>
        <CollapsibleItem header='Ice Cream Shop' icon='track_changes'>
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

export default Threads;
