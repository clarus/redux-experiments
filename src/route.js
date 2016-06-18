// @flow
import _ from 'lodash';
import pathToRegexp from 'path-to-regexp';

export type t = {
  type: 'Index'
} | {
  type: 'Todo',
  id: string
};

const routes: {[key: string]: (...args: string[]) => t} = {
  '/': () => ({
    type: 'Index'
  }),
  '/todo/:id': id => ({
    type: 'Todo',
    id
  })
};

export function parse(url: string): ?t {
  return _.map(routes, (run, pattern) => {
    const result: ?(string[]) = pathToRegexp(pattern).exec(url);
    if (result) {
      return run(...result.slice(1));
    }
    return null;
  }).find(route => !!route);
}

export function print(route: t): string {
  switch (route.type) {
    case 'index':
      return '/'
    case 'todo':
      return '/todo/' + route.id;
    default:
      throw new Error();
  }
}
