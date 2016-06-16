// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import * as Model from './redux/model.js';

const state = Model.initialState;

ReactDOM.render(
  <App state={state} />,
  document.getElementById('root')
);
