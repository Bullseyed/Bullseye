import React from 'react'
import { Button, Row } from 'react-materialize'
import { Link } from 'react-router-dom' 


const SaveBut = (props) => {
  return (
    <Row>
			<Link to ='/'><Button waves='light'>Save Search</Button></Link>
    </Row>
  )
}

export default SaveBut
