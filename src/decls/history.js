// @flow

declare module 'history' {
  declare function createHistory(): {
    listen: (handler: (location: {hash: string}) => void) => void
  };
}
