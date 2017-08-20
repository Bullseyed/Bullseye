import React from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom' 


const SubmitRepBut = (props) => {
  return (
    <Row>
			<Link to ='/business'><Button waves='light'>Back</Button></Link>
    </Row>
  )
}

export default SubmitRepBut
