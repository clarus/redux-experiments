// @flow
import * as TodosModel from './model.js';

export type t = {
  type: 'ChangeNew',
  value: string
} | {
  type: 'AddNew'
};

export function reduce(state: TodosModel.t, action: t): TodosModel.t {
  switch (action.type) {
    case 'ChangeNew':
      return {
        ...state,
        newTodo: action.value
      };
    case 'AddNew':
      return {
        ...state,
        newTodo: '',
        todos: [
          ...state.todos,
          state.newTodo
        ]
      };
    default:
      throw new Error();
  }
}
