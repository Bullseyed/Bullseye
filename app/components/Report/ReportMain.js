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


const ReportMain = (props) => {
	return (
		<Row>
			<Col l={3} style={{ paddingRight: 0, paddingLeft: 0 }}>
				<MapContainer />
			</Col>

			<Col l={9} style={{ paddingRight: 0, paddingLeft: 0 }}>
				<Row>
					<Nav />
				</Row>
				<Row>
					<Col>
						<Location />
					</Col>
				</Row>
				<Row>
					<Col>
						<Zips zips = { props.zips.join(', ') } />
					</Col>
				</Row>
				<Row>
					<Col>
						<Density zipsCount = { props.zips.length } demoData = { props.demoData } />
					</Col>
				</Row>
				<Row>
					<Col s={7}>
						<div style={{ overflow: 'auto', height: 400 }}>
							<BizList />
						</div>
					</Col>
					<Col s={5}>
						<Row>
							<div style={{ overflow: 'auto', height: 400 }}>
								<ChartModal demoData = { props.demoData } />
							</div>
						</Row>
					</Col>
				</Row>
				<Row>
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
	demoData: storeState.demoData
});

export default connect(mapStateToProps, null)(ReportMain);
