import axios from 'axios';

const GET_THREADS = 'GET_THREADS';
const MAKE_THREAD = 'MAKE_THREAD';
const UPVOTE = 'UPVOTE';
const SORT_THREADS = 'SORT_THREADS';

const getThreads = (threadList) => ({
  type: GET_THREADS,
  threadList,
});

export const sortThreads = (threadList) => ({
  type: SORT_THREADS,
  threadList
});

const makeThread = (threadObj) => ({
  type: MAKE_THREAD,
  threadObj
})

const upvote = (threadObj) => ({
  type: UPVOTE,
  threadObj
})

export const fetchThreads = () => dispatch => {
 axios.get('/api/threads')
    .then(res => res.data)
    .then(threads => dispatch(getThreads(threads)));
};

export const postThread = (threadObj) => dispatch => {
  axios.post('/api/threads', threadObj)
  .then(res=>res.data)
  .then(newThreadObj => dispatch(makeThread(newThreadObj)))
};

export const upvoteThread = (threadObj, userId) => dispatch => {
  const upvoted = Object.assign({}, threadObj, {score: threadObj.score+1}, {scoreAuthors: threadObj.scoreAuthors.concat(+userId)});
  axios.put('/api/threads', upvoted)
  .then(res=>res.data)
  .then(updatedThreadObj => dispatch(upvote(updatedThreadObj)))
};

function threadReducer(threads = [], action) {
  switch (action.type) {
    case GET_THREADS:
      return action.threadList;
    case SORT_THREADS:
      return action.threadList;
    case MAKE_THREAD:
      return [action.threadObj, ...threads]
    case UPVOTE:
      return threads.map(thread=>(
        action.threadObj.id === thread.id ? action.threadObj : thread
      ))
    default:
      return threads;
  }
}

export default threadReducer;
