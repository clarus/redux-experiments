// @flow
import React, { Element } from 'react';
import Todos from './todos.js';
import * as TodosModel from '../redux/todo/model.js';

export default function App(): Element {
  return (
    <div>
      <h1>Todos</h1>
      <Todos todos={TodosModel.initialState} />
    </div>
  );
}
