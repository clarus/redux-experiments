// @flow
import React, { Element } from 'react';
import * as Action from '../../redux/action.js';
import * as IndexAction from '../../redux/index/action.js';
import * as IndexModel from '../../redux/index/model.js';
import * as CommonTodosModel from '../../redux/common/todos/model.js';
import IndexTodo from './todo.js';
import _ from 'lodash';

type Props = {
  dispatch: (action: Action.t) => void,
  index: IndexModel.t,
  todos: CommonTodosModel.t
};

function handleChangeInput(props: Props, event: SyntheticEvent): void {
  if (event.target instanceof HTMLInputElement) {
    props.dispatch({
      type: 'Index',
      action: {
        type: 'ChangeNew',
        value: event.target.value
      }
    });
  }
}

function handleClickAdd(props: Props): void {
  props.dispatch({
    type: 'Index',
    action: {
      type: 'AddNew'
    }
  })
}

export default function Index(props: Props): Element {
  return (
    <div>
      <input
        onChange={(event: SyntheticEvent) => handleChangeInput(props, event)}
        type="text"
        value={props.index.newTodo}
      />
    <button
      onClick={() => handleClickAdd(props)}
      type="button"
    >
      Add
    </button>
      <ul>
        {_.map(props.todos, (todo, id) =>
          <IndexTodo key={id} value={todo.title} />
        )}
      </ul>
    </div>
  );
}
