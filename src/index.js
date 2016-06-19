// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import App from './view/app';
import * as Action from './redux/action.js';
import * as Model from './redux/model.js';
import * as Route from './route.js';
import { createStore } from 'redux';

const store = createStore(Action.reduce, Model.initialState);

function render(): void {
  ReactDOM.render(
    <App
      dispatch={store.dispatch}
      state={store.getState()}
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);

const history = createHistory();

history.listen(location => {
  const route = Route.parse(location.hash.slice(1));
  if (route) {
    store.dispatch({
      type: 'Common',
      action: {
        type: 'Route',
        action: route,
      },
    });
  }
});

render();
