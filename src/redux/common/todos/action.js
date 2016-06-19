// @flow
import * as Model from './model.js';

export type t = {
  type: 'Add',
  title: string
} | {
  type: 'Edit',
  id: string,
  text: string,
  title: string
};

export function reduce(state: Model.t, action: t): Model.t {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        [`id${Object.keys(state).length}`]: {
          text: '',
          title: action.title,
        },
      };
    case 'Edit':
      return {
        ...state,
        [action.id]: {
          text: action.text,
          title: action.title,
        },
      };
    default:
      throw new Error();
  }
}
