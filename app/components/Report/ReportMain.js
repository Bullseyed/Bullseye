import React from 'react';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import MapContainer from '../Map/MapContainer';
import Nav from '../Nav/Nav';
import HomeBut from './HomeBut';
import BizList from './BizList';
import Location from './Location';
import Zips from './Zips';
import Density from './Density';
import SaveBut from './SaveBut';
import ChartModal from './ChartModal';
import Streetview from './Streetview'


const ReportMain = (props) => {
	return (
		<Row>
			<Col l={3} style={{ paddingRight: 0, paddingLeft: 0 }}>
				<MapContainer />
			</Col>

			<Col l={9} style={{ paddingRight: 0, paddingLeft: 0, height: '100vh' }}>
				<Row>
					<Nav />
				</Row>
				<Row>
				<Col l={7}>
						<Streetview bullseye={props.bullseye} report={props.report}/>
					</Col>
					<Col l={5}>
						<Row>
							<Col>
								<Location />
							</Col>
						</Row>
						<Row>
							<Col>
								<Zips zips={props.zips.join(', ')} />
							</Col>
						</Row>
						<Row>
							<Col>
								<Density zipsCount={props.zips.length} demoData={props.demoData} />
							</Col>
						</Row>
					</Col>
				</Row>
				<Row style={{marginBottom: 10}}>
					<Col s={7}>
						<div style={{ overflow: 'auto', height: '45vh' }}>
							<BizList />
						</div>
					</Col>
					<Col s={5}>
						<Row style={{marginBottom: 0}}>
							<div style={{ overflow: 'auto', height: '45vh' }}>
								<ChartModal demoData={props.demoData} />
							</div>
						</Row>
					</Col>
				</Row>
				<Row style={{marginBottom: 0}}>
					<Col>
						<HomeBut />
					</Col>
					<Col>
						<SaveBut />
					</Col>
				</Row>
			</Col>
		</Row>
	);
};


const mapStateToProps = storeState => ({
	zips: storeState.zip,
	demoData: storeState.demoData,
	bullseye: storeState.bullseye,
	report: storeState.report
});

export default connect(mapStateToProps, null)(ReportMain);
