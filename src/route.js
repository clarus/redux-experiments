// @flow
import _ from 'lodash';
import pathToRegexp from 'path-to-regexp';

export type t = {
  type: 'index'
} | {
  type: 'todo',
  id: string
};

const routes: {[key: string]: (...args: string[]) => t} = {
  '/': () => ({
    type: 'index'
  }),
  '/todo/:id': id => ({
    type: 'todo',
    id
  })
};

function parse(url: string): ?t {
  return _.map(routes, (run, pattern) => {
    const result: ?(string[]) = pathToRegexp(pattern).exec(url);
    if (result) {
      return run(...result.slice(1));
    }
    return null;
  }).find(route => !!route);
}

export function test(): void {
  const result = pathToRegexp('/:foo/:bar').exec('/test/route');
  console.log(result);
  console.log(parse('kjlkjl'), parse('/'), parse('/todo/sdfsd'));
}
