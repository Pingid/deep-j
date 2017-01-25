import curry from '../curry';
import objectType from './objectType';

const objectFilter = curry((f, o) => {
  const newObj = {};
  Object.keys(o).forEach((key) => {
    if (f(o[key], key, o)) { newObj[key] = o[key]; }
  });
  return newObj;
});

const arrayFilter = curry((f, a) => a.filter((x, i) => f(x, i, a)));

const filter = curry((f, o) => objectType(objectFilter(f), arrayFilter(f), o));

export default filter;
