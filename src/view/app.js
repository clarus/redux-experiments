// @flow
import React, { Element } from 'react';
import Index from './index/index.js';
import * as Action from '../redux/action.js';
import * as Model from '../redux/model.js';

type Props = {
  dispatch: (action: Action.t) => void,
  state: Model.t
};

export default function App(props: Props): Element<*> {
  return (
    <div>
      <h1>Todos</h1>
      <Index
        dispatch={props.dispatch}
        index={props.state.index}
        todos={props.state.common.todos}
      />
    </div>
  );
}
