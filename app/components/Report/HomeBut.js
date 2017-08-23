import React from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import { clearRest } from '../../reducers/rest-reducer'
import { connect } from 'react-redux'



const SubmitRepBut = (props) => {
  const backClickReset = () => {
    props.clearRest()
  }
  console.log(props)
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

export default connect(null, { clearRest })(SubmitRepBut)
