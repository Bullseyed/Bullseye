import axios from 'axios'
import React from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const SaveBut = (props) => {
  const postReport = () => {
    axios.post('/api/reports', props.report);
  };
  return (
    <Row>
			<Link to ='/'><Button waves='light' onClick={postReport}>Save Search</Button></Link>
    </Row>
  )
}
const mapState = ({ report }) => ({
  report
})

export default connect(mapState, null)(SaveBut)
