import React, { Component } from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';

class SaveBut extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reportSaved: false
    }
    this.saveReport = this.saveReport.bind(this)
  }

  saveReport() {
    this.setState({reportSaved: true})
    axios.post('/api/reports', this.props.report)
  }

  render() {
    console.log(this.props.currentUser,this.state.reportSaved)
    return (
      (this.props.currentUser && !this.state.reportSaved) ?
      (
      <Row>
        <Button waves='light' onClick={this.saveReport}>Save Search</Button>
      </Row>
      )
      :
      (
      <Row>
        <Button disabled waves='light'>Save Search</Button>
      </Row>
      )
    )
  }
}


const mapState = ({ report, currentUser }) => ({
  report,
  currentUser,

})

export default connect(mapState, null)(SaveBut)
