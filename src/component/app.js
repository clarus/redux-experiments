// @flow
import React, { Element } from 'react';
import Todos from './todos.js';
import * as Action from '../redux/action.js';
import * as Model from '../redux/model.js';

type Props = {
  dispatch: (action: Action.t) => void,
  state: Model.t
};

export default function App(props: Props): Element {
  return (
    <div>
      <h1>Todos</h1>
      <Todos
        dispatch={props.dispatch}
        todos={props.state.todos}
      />
    </div>
  );
}
