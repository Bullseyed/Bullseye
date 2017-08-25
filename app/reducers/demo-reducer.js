import axios from 'axios';

const GET_DEMOGRAPHIC = 'GET_DEMOGRAPHIC';

const getDemographic = (demo) => ({
  type: GET_DEMOGRAPHIC,
  demo
});

const demographicReducer = (demoData = {}, action) => {
  switch (action.type) {
    case GET_DEMOGRAPHIC:
      return action.demo;
    default:
      return demoData;
  }
};

export const demographicThunk = (zipsArr, fipsCode = 36) => dispatch => {
  let zips = '';

  zipsArr.forEach((zip, idx) => {
    idx === 0 ? zips += zip : zips += ',' + zip;
  });

  axios.get(`http://api.census.gov/data/2010/sf1?get=P0010001,P0030002,P0030003,P0030005,P0120002,P0120026,P0280001,P0280002,P0280003,P0280004,P0280005,P0310001,P0180003,P0280009,P0280010,P0280011,P0280012,P0280013,P0040003,P0030006,P0030006,P0030006&for=zip+code+tabulation+area:${zips}&in=state:${fipsCode}&key=4541d7f2abfdc605f0ab64e713a7c987585398ff`)
    .then(res => {
      let combArr = []; //for combining various zipcodes
      for (let i = 0; i < res.data[1].length; i++) {
        if (res.data[3]) combArr.push(+res.data[1][i] + +res.data[2][i] + +res.data[3][i]);
        else if (res.data[2]) combArr.push(+res.data[1][i] + +res.data[2][i]);
        else combArr.push(+res.data[1][i]);
      }
      let demoData = {
        pieChart: [{
          graphTitle: 'Population of Children and Adults',
          data: [{
            x: 'adults',
            y: combArr[0] - combArr[11]
          }, {
            x: 'children',
            y: combArr[11]
          }]
        }, {
          graphTitle: 'Race Breakdown',
          data: [{
            x: 'white',
            y: combArr[1]
          }, {
            x: 'black',
            y: combArr[2]
          }, {
            x: 'asian',
            y: combArr[3]
          }, {
            x: 'hispanic',
            y: combArr[18]
          }, {
            x: 'other',
            y: combArr[19] + combArr[20] + combArr[21]
          }]
        }, {
          graphTitle: 'Gender Breakdown',
          data: [{
            x: 'male',
            y: combArr[4]
          },{
            x: 'female',
            y: combArr[5]
          }]
        }],
        barGraph: [{
          graphTitle: 'Family Household Size',
          xLabel: 'Household Size',
          yLabel: 'Number of Households',
          data: [{
            x: 'couple',
            y: combArr[12]
          }, {
            x: '2',
            y: combArr[8]
          }, {
            x: '3',
            y: combArr[9]
          }, {
            x: '4',
            y: combArr[10]
          }, {
            x: '5+',
            y: combArr[7] - combArr[8] - combArr[9] - combArr[10]
          }]
        }, {
          graphTitle: 'Non-Family Household Size',
          xLabel: 'Household Size',
          yLabel: 'Number of Households',
          data: [{
            x: '1',
            y: combArr[14],
          },
          {
            x: '2',
            y: combArr[15]
          },
          {
            x: '3',
            y: combArr[16]
          },
          {
            x: '4',
            y: combArr[17]
          },
          {
            x: '5+',
            y: combArr[13] - combArr[14] - combArr[15] - combArr[16] - combArr[17]
          }
        ]
      }
    ]
  };
    dispatch(getDemographic(demoData));
    })
    .catch((e) => console.error(e));
};

export default demographicReducer;
