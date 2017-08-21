import React, { Component } from 'react'
import Nav from './Nav/Nav'
import { Row, Col, Button, Card, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
	constructor() {
		super()
		this.state = {
			hovered: false,
			hoverText: ''
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter(whichCard) {
		this.setState({hovered: true}, () => { console.log('done1') })
		if (whichCard === 'biz') {
			this.setState({hoverText:
				"Get information of all similar businesses in a select area. Use these statistics to increase the likelihood of your business' success!"
			}, () => { console.log('done2') })
		}
		else {
			this.setState({hoverText: 'Vote and request business ideas. Collaborate with other residents!'});
		}
	}

	handleMouseLeave() {
		console.log('hello222')
		this.setState({hovered: false})
	}

	render() {
		return (
			<div>
				<Row>
					<Nav />
				</Row>
				<Row style={{textAlign:'center'}}>
					<h>  Welcome To Bullseye </h>
				</Row>
				<Row style={{textAlign:'center'}}>
					<h> I am a... </h>
				</Row>
				<Row>
					<Col l={3} offset='l3'>
						<Link to='/business'>
							<Card
								onMouseEnter={() => this.handleMouseEnter('biz')}
								onMouseLeave={() => this.handleMouseLeave()}
								header={
									<CardTitle
										reveal
										image='https://www.labitax.com/wp-content/uploads/2016/08/business_entities_labi.jpg'
										waves='light'

									>
									{ this.state.hovered && <p style={{color: 'blue', backgroundColor: 'rgba(0,0,0,0.5)'}}>{this.state.hoverText}</p> }
									</CardTitle>
								}
							>
								LOOKING TO OPEN A BUSINESS?
							</Card>
						</Link>
					</Col>
					{// 	<Card header={<CardTitle reveal image='https://www.labitax.com/wp-content/uploads/2016/08/business_entities_labi.jpg' waves='light' style={{ height: 200, width: '100%' }} />}
					// 		title="Business Owner"
					// 		reveal={
					// 			<div>
					// 				<p> Get information of all similar businesses in a select area. </p>
					// 				<p> Use these statistics to increase the likelihood of your business' success! </p>
					// 			</div>
					// 			}>
					// 		<p><Link to='/business'> <Button> Go </Button> </Link></p>
					// 	</Card>
					// </Col>
				}
					<Col l={3}>
						<Card header={<CardTitle reveal image={'http://cdn.playbuzz.com/cdn/8f185be4-47d8-446b-83aa-2b72c8fcee20/28679a5c-371f-4e43-821a-6ae9a935325d.jpg'} waves='light' style={{ height: 200, width: '100%' }} />}
							title="Resident"
							reveal={
								<div>
								<p> Vote and request business ideas. </p>
								<p> Collaborate with other residents!  </p>
								</div>
								}>
							<p><Link to='/threads'> <Button> Go </Button> </Link></p>
						</Card>
					</Col>
				</Row>
			</div>
		)
}
}

export default LandingPage
