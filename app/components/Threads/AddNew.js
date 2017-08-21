import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Input, Button, Modal } from 'react-materialize';
import axios from 'axios';
import { postThread } from '../../reducers/thread-reducer'
import { Link } from 'react-router-dom'
import AddNewThreadModal from './AddNewThreadModal'

const AddNew = () => {

  return (
    <Col s={6} offset="s3">
      <Modal
        header='Propose a Business'
        trigger={<Button waves='light'> Propose a Business </Button>}>
        <AddNewThreadModal />
      </Modal>
    </Col>
  );
}

export default AddNew;
