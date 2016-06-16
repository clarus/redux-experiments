// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import * as Model from './redux/model.js';

const store = Model.initialState;

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
