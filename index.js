import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YouTuber from './App';
import {Programmer} from './App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ol>
    <li>Java script</li>
    <li>{YouTuber}</li>
    <li>{Programmer}</li>
  </ol>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
