// @flow
import * as Model from './model.js';

export type t = {
  type: 'ChangeNew',
  value: string
} | {
  type: 'AddNew'
};

export function reduce(state: Model.t, action: t): Model.t {
  switch (action.type) {
    case 'ChangeNew':
      return {
        ...state,
        newTodo: action.value,
      };
    case 'AddNew':
      return {
        ...state,
        newTodo: '',
      };
    default:
      throw new Error();
  }
}
