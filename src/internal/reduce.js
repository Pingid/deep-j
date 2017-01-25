import curry from '../curry';
import objectType from './objectType';

const objectReduce = curry((f, i, o) => {
  let result = i;
  Object.keys(o).forEach((key) => { result = f(result, o[key], key, o); });
  return result;
});

const arrayReduce = curry((f, i, a) => a.reduce((x, y, z) => f(x, y, z, a), i));

const reduce = curry((func, intitialValue, object) =>
  objectType(objectReduce(func, intitialValue), arrayReduce(func, intitialValue), object));

export default reduce;
