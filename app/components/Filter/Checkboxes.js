import React from 'react'
import { Input, Button, Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import { putCheckbox } from '../../reducers/checkbox-reducer'

const Checkboxes = (props) => {
  return (
    <div>
      <Row>
        <Col s={4}>
          <Input name='group1' type='checkbox' value='crime' label='Crime' onChange={props.putCheckbox} />
        </Col>
        <Col s={4}>
          <Input name='group1' type='checkbox' value='demo' label='Demographic' onChange={props.putCheckbox} />
        </Col>
        <Col s={4}>
          <Input name='group1' type='checkbox' value='income' label='Income Levels' onChange={props.putCheckbox} />
        </Col>
        <Col s={4}>
          <Input name='group1' type='checkbox' value='population' label='Population Density' onChange={props.putCheckbox} />
        </Col>
      </Row>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  putCheckbox: (checkboxObj) => dispatch(putCheckbox(checkboxObj))
})


export default connect(null, mapDispatchToProps)(Checkboxes)
