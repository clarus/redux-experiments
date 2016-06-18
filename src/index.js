// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import * as Action from './redux/action.js';
import * as Model from './redux/model.js';

let state = Model.initialState;

function dispatch(action: Action.t): void {
  state = Action.reduce(state, action);
  console.log(action, state);
}

ReactDOM.render(
  <App
    dispatch={dispatch}
    state={state}
  />,
  document.getElementById('root')
);
