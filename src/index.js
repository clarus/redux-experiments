// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import App from './view/app';
import * as Action from './redux/action.js';
import * as Model from './redux/model.js';
import * as Route from './route.js';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

const store = createStore(
  Action.reduce,
  Model.initialState,
  applyMiddleware(createLogger())
);

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

import * as Tree from './redux/middleware/tree.js';

function incr(x: number): Tree.t<void, number> {
  return Tree.then(Tree.ret(x), r => Tree.ret(r + 1));
}

function sum(x: number, y: number): Tree.t<void, number> {
  return Tree.then(Tree.all(Tree.ret(x), Tree.ret(y)), results =>
    Tree.ret(results[0] + results[1])
  );
}

Tree.run(() => Promise.resolve(), incr(12)).then(result => console.log(result));
Tree.run(() => Promise.resolve(), sum(12, 13)).then(result => console.log(result));
