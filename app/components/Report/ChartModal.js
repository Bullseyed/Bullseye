import React from 'react'
import { Row, Col, Collection, CollectionItem, Modal, Icon } from 'react-materialize'
import Charts from './Charts'
import { connect } from 'react-redux'
import Piechart from './PieChart';
import Bargraph from './BarGraph';

const ChartModal = (props) => {
	return (
		<Modal
			header='Statistics'
			trigger={<div><Charts /></div>}
			style = {{height: '100%', width:'85%'}}
		>
			<Row className="valign-wrapper" height={'100%'}>

				<Col l={12} height={'100%'}>
					{
						props.demoData.barGraph && props.demoData.barGraph.map((graph) => {
							return (
								<Col l={6} key={graph.graphTitle} style={{ paddingBottom: 50 }}>
									{graph.graphTitle}
									<Bargraph demoData={graph} />
								</Col>
							);
						})
					}
					{
						props.demoData.pieChart && props.demoData.pieChart.map((chart) => {
							return (
								<Col l={6} key={chart.graphTitle} style={{ paddingBottom: 50 }}>
									{chart.graphTitle}
									<Piechart demoData={chart} />
								</Col>
							);
						})
					}
				</Col>
			</Row>
		</Modal>
	)
}
const mapStateToProps = storeState => ({ demoData: storeState.demoData });
export default connect(mapStateToProps, null)(ChartModal);