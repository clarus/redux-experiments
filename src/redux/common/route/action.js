// @flow
import * as Model from './model.js';
import * as Route from '../../../route.js';

export type t = Route.t;

export function reduce(state: Model.t, action: t): Model.t {
  return action;
}
