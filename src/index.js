import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  // wrappig App comoponent inside BrowserRouter in order to use functionality of client side rendering
  //we import Switch and Route inside our App component
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
