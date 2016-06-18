// @flow
import React, { Element } from 'react';
import * as Action from '../redux/action.js';
import * as TodosAction from '../redux/todos/action.js';
import * as TodosModel from '../redux/todos/model.js';
import Todo from './todo.js';

type Props = {
  dispatch: (action: Action.t) => void,
  todos: TodosModel.t
};

function handleChangeInput(props: Props, event: SyntheticEvent): void {
  if (event.target instanceof HTMLInputElement) {
    props.dispatch({
      type: 'Todos',
      action: {
        type: 'ChangeNew',
        value: event.target.value
      }
    });
  }
}

function handleClickAdd(props: Props): void {
  props.dispatch({
    type: 'Todos',
    action: {
      type: 'AddNew'
    }
  })
}

export default function Todos(props: Props): Element {
  return (
    <div>
      <input
        onChange={(event: SyntheticEvent) => handleChangeInput(props, event)}
        type="text"
        value={props.todos.newTodo}
      />
    <button
      onClick={() => handleClickAdd(props)}
      type="button"
    >
      Add
    </button>
      <ul>
        {props.todos.todos.map((todo, index) =>
          <Todo key={index} value={todo} />
        )}
      </ul>
    </div>
  );
}
