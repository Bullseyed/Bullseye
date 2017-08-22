import axios from 'axios'

const GET_REPORTS = 'GET_REPORT'
const ADD_REPORT = 'ADD_REPORT'

const getReports = (reportsList) => ({
	type: GET_REPORTS,
		reportsList
})

const addReport = (reportObj) => ({
	type: ADD_REPORT,
		reportObj
})

export const fetchReports = (currentUserId) => dispatch => {
	const url = '/api/reports/' + currentUserId.toString()
	axios.get(url)
		.then(res => res.data)
		.then(reportObjList => dispatch(getReports(reportObjList)))
}

export const postReport = (reportsObj) => dispatch => {
	console.log('firing')
	axios.post('/api/reports', reportsObj)
		.then(res=>res.data)
		.then(newReport=>dispatch(addReport(newReport)))
}

const reportReducer = (reports=[], action) => {
	switch (action.type){
		case GET_REPORTS:
			return reports.concat(action.reportsList)
		default:
			return reports
	}
}

export default reportReducer