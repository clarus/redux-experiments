// @flow
import * as IndexAction from './index/action.js';
import * as Model from './model.js';

export type t = {
  type: 'Index',
  action: IndexAction.t
};

export function reduce(state: Model.t, action: t): Model.t {
  switch (action.type) {
    case 'Index':
      return {
        ...state,
        index: IndexAction.reduce(state.index, action.action)
      };
    default:
      throw new Error();
  }
}
