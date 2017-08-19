import axios from 'axios';

const GET_THREADS = 'GET_THREADS';

const getThreads = (threadList) => ({
  type: GET_THREADS,
  threadList,
});

export const fetchThreads = () => dispatch => {
 axios.get('/api/threads')
    .then(res => {
      return res.data
    })
    .then(threads => dispatch(getThreads(threads)));
};

function threadReducer(threads = [], action) {
  switch (action.type) {
    case GET_THREADS:
      return action.threadList;
    default:
      return threads;
  }
}

export default threadReducer;
