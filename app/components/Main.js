import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import { connect } from 'react-redux'
import Filter from './Filter/Main'
import MapContainer from './Map/MapContainer'
<<<<<<< HEAD
import Nav from './Nav'
import Chart from './Report/Chart'
=======
import Nav from './Nav/Nav'
<<<<<<< HEAD
>>>>>>> d31b5c0b00854e70395ac7c1910ae6063dbeee37
=======
import { demographicThunk } from '../reducers/demographic'
>>>>>>> daf3701a8a400754493506bfda511e506a0bf775

class Main extends React.Component {

<<<<<<< HEAD
<<<<<<< HEAD
      <Col l={4} style={{paddingRight:0, paddingLeft: 0}}>
        <Row><Nav /></Row>
        <Filter />
        <Row><Chart /></Row>
=======
      <Col l={4} style={{ paddingRight: 0, paddingLeft: 0}}>
        <Row>
          <Nav />
        </Row>
        <Filter/>
>>>>>>> d31b5c0b00854e70395ac7c1910ae6063dbeee37
      </Col>
    </Row>
  )
}
=======
  componentDidMount() {
    console.log('component did mount')
    console.log(this.props)
    this.props.demographicThunk()
>>>>>>> daf3701a8a400754493506bfda511e506a0bf775

  }
  render() {
    return (
      <Row>
        <Col l={8} style={{ paddingRight: 0, paddingLeft: 0, }}>
          <MapContainer />
        </Col>

        <Col l={4} style={{ paddingRight: 0, paddingLeft: 0 }}>
          <Row>
            <Nav />
          </Row>
          <Filter />
        </Col>
      </Row>
    )
  }
}
const mapState = ({ demographic }) => ({
  demographic
})
export default connect(mapState, { demographicThunk })(Main);
