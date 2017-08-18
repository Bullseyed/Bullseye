import React from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import { Modal } from 'react-materialize'


const SaveBut = (props) => {

  const saveReport = (props) => {
    console.log('saving report')
    axios.post('/api/reports', props.report)
  }

  return (
    <Row>
      <Modal
        onClick={saveReport}
        trigger={<Button waves='light'>Save Search</Button>}>
        <p>Search Saved</p>
      </Modal>
    </Row>
  )
}

const mapState = ({ report }) => ({
  report
})

export default connect(mapState, null)(SaveBut)
