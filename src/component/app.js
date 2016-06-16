// @flow
import React, { Element } from 'react';
import Todos from './todos.js';
import * as Model from '../redux/model.js';

type Props = {
  state: Model.t
};

export default function App(props: Props): Element {
  return (
    <div>
      <h1>Todos</h1>
      <Todos todos={props.state.todos} />
    </div>
  );
}
