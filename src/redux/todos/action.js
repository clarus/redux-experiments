// @flow
import * as TodosModel from './model.js';

export type t = {
  type: 'ChangeNew',
  value: string
};

export function reduce(state: TodosModel.t, action: t): TodosModel.t {
  switch (action.type) {
    case 'ChangeNew':
      return {
        ...state,
        newTodo: action.value
      };
    default:
      throw new Error();
  }
}
