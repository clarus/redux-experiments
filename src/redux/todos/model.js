// @flow

export type t = {
  newTodo: string,
  todos: string[],
};

export const initialState: t = {
  newTodo: '',
  todos: [
    'First todo',
    'Second todo'
  ],
};
