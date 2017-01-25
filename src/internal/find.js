import curry from '../curry';
import objectType from './objectType';

const objectFind = curry((f, o) => {
  let result = null;
  Object.keys(o).forEach((key) => { if (f(o[key], key)) { result = o[key]; } });
  return result;
});

const arrayFind = curry((f, a) => a.filter((x, i) => f(x, i))[0] || null);

const find = curry((func, object) =>
  objectType(objectFind(func), arrayFind(func), object));

export default find;
