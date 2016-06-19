// @flow
import * as CommonModel from './common/model.js';
import * as IndexModel from './index/model.js';

export type t = {
  common: CommonModel.t,
  index: IndexModel.t
};

export const initialState: t = {
  common: CommonModel.initialState,
  index: IndexModel.initialState,
};
