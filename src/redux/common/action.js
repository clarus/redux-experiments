// @flow
import * as Model from './model.js';
import * as RouteAction from './route/action.js';
import * as TodosAction from './todos/action.js';

export type t = {
  type: 'Route',
  action: RouteAction.t
} | {
  type: 'Todos',
  action: TodosAction.t
};

export function reduce(state: Model.t, action: t): Model.t {
  switch (action.type) {
    case 'Route':
      return {
        ...state,
        route: RouteAction.reduce(state.route, action.action)
      };
    case 'Todos':
      return {
        ...state,
        todos: TodosAction.reduce(state.todos, action.action)
      };
    default:
      throw new Error();
  }
}
