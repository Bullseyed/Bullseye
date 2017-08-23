import React from 'react';
import { Button, Row, Col, Modal } from 'react-materialize';

const HowToUseBut = () => {

  return (
    <Row>
      <Col s={6} offset="s3">
        <Modal header="How to Use Bullseye" trigger={<Button waves="light"><i className='material-icons left'>info</i> How To Use Bullseye</Button>}>
          <Row>
            <Col>
              <p> <b> Step 1: </b> Click the map to select a target location </p>
              <p> <b> Step 2: </b> Click 'Propose A Business' and fill in the necessary fields </p>
              <p> <b> Step 3: </b> Collaborate with neighbors by commenting and voting on existing ideas! </p>
            </Col>
          </Row>
        </Modal>
      </Col>
    </Row>
  );
};


export default HowToUseBut;
