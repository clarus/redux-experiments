declare module 'redux' {
  declare class Store<S, A> {
    dispatch: (action: A) => void,
    getState: () => S,
    subscribe: (listener: () => void) => void
  }

  declare type Middleware<S, A> =
    (store: { getState: () => S, dispatch: (action: A) => void }) =>
    (next: (action: A) => A) =>
    A;

  declare var applyMiddleware: Function;

  declare function createStore<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S)
    : Store<S, A>;
}
