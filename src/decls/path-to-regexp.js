// @flow
declare module 'path-to-regexp' {
  declare var exports: {
    (pattern: string): RegExp;
    compile: (pattern: string) => (args: {[key: string]: string}) => string
  };
}
