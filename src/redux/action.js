// @flow
import * as CommonAction from './common/action.js';
import * as IndexAction from './index/action.js';
import * as Model from './model.js';

export type t = {
  type: 'Common',
  action: CommonAction.t
} | {
  type: 'Index',
  action: IndexAction.t
};

export function reduce(state: Model.t, action: t): Model.t {
  if (action.type === '@@redux/INIT') {
    return state;
  }
  switch (action.type) {
    case 'Common':
      return {
        ...state,
        common: CommonAction.reduce(state.common, action.action),
      };
    case 'Index':
      return {
        ...state,
        index: IndexAction.reduce(state.index, action.action),
      };
    default:
      throw new Error();
  }
}
