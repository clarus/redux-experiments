// @flow

export type t<E, A> = {
  type: 'Ret',
  value: A
} | {
  type: 'Call',
  action: E
} | {
  type: 'Then',
  first: t<E, any>,
  second: (result: any) => t<E, A>
} | {
  type: 'All',
  first: t<E, any>,
  second: t<E, any>
};

export function ret<E, A>(value: A): t<E, A> {
  return {
    type: 'Ret',
    value,
  };
}

export function call<E, A>(action: E): t<E, A> {
  return {
    type: 'Call',
    action,
  };
}

export function then<E, A, B>(first: t<E, A>, second: (result: A) => t<E, B>)
  : t<E, B> {
  return {
    type: 'Then',
    first,
    second,
  };
}

export function all<E, A, B>(first: t<E, A>, second: t<E, B>): t<E, [A, B]> {
  return {
    type: 'All',
    first,
    second,
  };
}

export function run<E, A>(
  dispatch: (action: E) => Promise<any>,
  program: t<E, A>)
  : Promise<A> {
  switch (program.type) {
    case 'Ret':
      return Promise.resolve(program.value);
    case 'Call':
      return dispatch(program.action);
    case 'Then': {
      const { first, second } = program;
      return run(dispatch, first).then(result =>
        run(dispatch, second(result))
      );
    }
    case 'All': {
      const { first, second } = program;
      return (Promise.all([run(dispatch, first), run(dispatch, second)]): any);
    }
    default:
      throw new Error();
  }
}
