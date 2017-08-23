import React from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import { clearRests } from '../../reducers/rest-reducer'
import { connect } from 'react-redux'

const SubmitRepBut = (props) => {
  const backClickReset = () => {
    props.clearRests()
  }
  console.log("!#(*!@#(!#(!@&#!&@*(#&!@#(!&@", props)
  return (
    <Row>
      <Link to='/business'>
        <Button
          waves='light'
          onClick={backClickReset}>
          Back
        </Button>
      </Link>
    </Row>
  )
}

const mapDispatchToProps = dispatch => ({
  clearRests: () => dispatch(clearRests())
})
export default connect(null, mapDispatchToProps)(SubmitRepBut)
