// @flow
import * as TodosUpdate from './todos/update.js';
import * as Model from './model.js';

export type t = {
  type: 'Todos',
  action: TodosUpdate.t
};

export function reduce(state: Model.t, action: t): Model.t {
  switch (action.type) {
    case 'Todos':
      return {
        ...state,
        todos: TodosUpdate.reduce(state.todos, action.action)
      };
    default:
      throw new Error();
  }
}
