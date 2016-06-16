// @flow
import * as TodosModel from './todos/model.js';

export type t = {
  todos: TodosModel.t
};

export const initialState: t = {
  todos: TodosModel.initialState
};
