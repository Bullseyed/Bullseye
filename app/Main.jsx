import React from 'react';
import ReactDOM from 'react-dom';

function add() {
  console.log('hello')
 }

ReactDOM.render(
  <div>Hello world!</div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
