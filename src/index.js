import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TheTitle from './TheTitle'
import reportWebVitals from './reportWebVitals';
import Calculator from './components/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <TheTitle />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
