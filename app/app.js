// Dependencies 
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
var Router = require('react-router').Router;

// Render
ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);