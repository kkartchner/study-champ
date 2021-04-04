import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'ui-neumorphism/dist/index.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
