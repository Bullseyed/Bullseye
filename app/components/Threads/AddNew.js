import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapsible, CollapsibleItem, Input, Button, Modal, Icon } from 'react-materialize';
import axios from 'axios';
import { postThread } from '../../reducers/thread-reducer'
import { Link } from 'react-router-dom'
import AddNewThreadModal from './AddNewThreadModal'

const AddNew = (props) => {

  return (
      <Modal
        header='Propose a Business'
        trigger=
          {
            props.bullseye.length
            ? <Button large waves='light'><i className='material-icons left'>add_location</i>Propose a Business</Button>
            : <Button large disabled waves='light'><i className='material-icons left'>add_location</i>Propose a Business</Button>

          }>
          <AddNewThreadModal />
      </Modal>
  );
}

const mapStateToProps = ({bullseye}) => ({ bullseye });

export default connect(mapStateToProps, null)(AddNew);

