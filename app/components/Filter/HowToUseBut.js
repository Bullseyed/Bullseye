import React from 'react';
import { Button, Row, Col, Modal } from 'react-materialize';

const HowToUseBut = () => {

  return (
    <Row>
      <Col s={6} offset="s3">
        <Modal header="How to Use Bullseye:" trigger={<Button waves="light"><i className='material-icons left'>add_location</i>How To Use Bullseye</Button>}>
          <Row>
            <Col>
              <p> <b> Step 1: </b> Select a business category and sub-category from the dropdown menu</p>
              <p> <b> Step 2: </b> Select a radius (in miles or kilometers)</p>
              <p> <b> Step 3: </b> Click the map to select a target location</p>
              <p> <b> Step 4: </b> Generate your custom report!</p>
            </Col>
          </Row>
        </Modal>
      </Col>
    </Row>
  );
};


export default HowToUseBut;
