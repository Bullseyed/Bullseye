import React, { Component } from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { postReport } from '../../reducers/saved-report-reducer'

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
    const newReport = Object.assign({},this.props.report,{userId: this.props.currentUser.id, address: this.props.address[0].formatted_address})
    this.props.postReport(newReport)
  }

  render() {
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


const mapState = ({ report, currentUser,address }) => ({
  report,
  currentUser,
  address
})

const mapDispatchToProps = dispatch => ({
  postReport: (reportObj) => dispatch(postReport(reportObj))
})

export default connect(mapState, mapDispatchToProps)(SaveBut)
