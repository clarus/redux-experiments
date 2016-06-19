declare module 'redux' {
  declare class Store<S, A> {
    dispatch: (action: A) => void,
    getState: () => S,
    subscribe: (listener: () => void) => void
  }

  declare function createStore<S, A>(
    reducer: (state: S, action: A) => S,
    initialState: S)
    : Store<S, A>;
}
