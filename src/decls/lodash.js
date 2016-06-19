declare module 'lodash' {
  declare var exports: {
    map: <K, V1, V2>(
      collection: {[key: K]: V1},
      iteratee: (value: V1, key: K) => V2)
      => V2[]
  };
}
