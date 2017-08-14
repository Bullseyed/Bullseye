import React from 'react'
import { Input, Button, Row } from 'react-materialize'
import { connect } from 'react-redux'
import { putCheckbox } from '../../reducers/checkbox-reducer'

const Checkboxes = (props) => {
  return (
    <div>
      <Row>
        <Input name='group1' type='checkbox' value='crime' label='Crime' onChange={props.putCheckbox} />
        <Input name='group1' type='checkbox' value='demo' label='Demographic' onChange={props.putCheckbox} />
        <Input name='group1' type='checkbox' value='income' label='Income Levels' onChange={props.putCheckbox} />
        <Input name='group1' type='checkbox' value='population' label='Population Density' onChange={props.putCheckbox} />
      </Row>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  putCheckbox: (checkboxObj) => dispatch(putCheckbox(checkboxObj))
})


export default connect(null, mapDispatchToProps)(Checkboxes)
