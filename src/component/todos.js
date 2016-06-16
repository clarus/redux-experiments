// @flow
import React, { Element } from 'react';
import * as TodosModel from '../redux/todo/model.js';
import Todo from './todo.js';

type Props = {
  todos: TodosModel.t
};

export default function Todos(props: Props): Element {
  return (
    <ul>
      {props.todos.todos.map((todo, index) => <Todo key={index} value={todo} />)}
    </ul>
  );
}
