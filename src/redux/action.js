// @flow
import * as TodosAction from './todos/action.js';
import * as Model from './model.js';

export type t = {
  type: 'Todos',
  action: TodosAction.t
};

export function reduce(state: Model.t, action: t): Model.t {
  switch (action.type) {
    case 'Todos':
      return {
        ...state,
        todos: TodosAction.reduce(state.todos, action.action)
      };
    default:
      throw new Error();
  }
}
