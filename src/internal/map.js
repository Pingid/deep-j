import curry from '../curry';
import objectType from './objectType';

const objectMap = curry((f, o) => {
  const newObj = {};
  Object.keys(o).forEach((key) => { newObj[key] = f(o[key], key, o); });
  return newObj;
});

const arrayMap = curry((f, a) => a.map((x, i) => f(x, i, a)));

const map = curry((func, object) => objectType(objectMap(func), arrayMap(func), object));

export default map;
