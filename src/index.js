// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import App from './view/app';
import * as Action from './redux/action.js';
import * as Model from './redux/model.js';
import * as Route from './route.js';

let state = Model.initialState;

function render(): void {
  ReactDOM.render(
    <App
      dispatch={dispatch}
      state={state}
    />,
    document.getElementById('root')
  );
}

function dispatch(action: Action.t): void {
  state = Action.reduce(state, action);
  console.log(action, state);
  render(dispatch);
}

const history = createHistory();

history.listen(location => {
  const route = Route.parse(location.hash.slice(1));
  if (route) {
    dispatch({
      type: 'Common',
      action: {
        type: 'Route',
        action: route,
      },
    });
  }
});

render();
