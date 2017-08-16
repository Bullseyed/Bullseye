import React from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom' 


const SubmitRepBut = (props) => {
  return (
    <Row>
			<Link to ='/report'><Button waves='light'>Get Detailed Report</Button></Link>
    </Row>
  )
}

export default SubmitRepBut
