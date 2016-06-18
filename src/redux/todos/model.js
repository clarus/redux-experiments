// @flow

export type t = {
  newTodo: string,
  todos: string[],
};

export const initialState: t = {
  newTodo: 'New todo',
  todos: [
    'First todo',
    'Second todo'
  ],
};
