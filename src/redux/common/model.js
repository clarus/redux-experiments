// @flow
import * as RouteModel from './route/model.js';
import * as TodosModel from './todos/model.js';

export type t = {
  route: RouteModel.t,
  todos: TodosModel.t
};

export const initialState: t = {
  route: RouteModel.initialState,
  todos: TodosModel.initialState,
};
