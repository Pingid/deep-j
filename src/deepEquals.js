import curry from './curry';
import objectType from './internal/objectType';
import isObjectLike from './internal/isObjectLike';

const objectEquals = curry((a, b) => {
  let result = true;
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  Object.keys(a).forEach((key) => {
    if (!b[key]) {
      result = false;
    } else if (isObjectLike(a[key])) {
      result = deepEquals(a[key], b[key]);
    } else if (b[key] !== a[key]) { result = false; }
  });
  return result;
});

const arrayEquals = curry((a, b) => {
  let result = true;
  if (a.length !== b.length) return false;
  a.forEach((x, i) => {
    if (!b[i]) {
      result = false;
    } else if (isObjectLike(x)) {
      result = deepEquals(x, b[i]);
    } else if (x !== b[i]) { result = false; }
  });
  return result;
});

const deepEquals = (a, b) => (isObjectLike(a) && isObjectLike(b)) ?
  objectType(objectEquals(a), arrayEquals(a), b) : a === b;

export default deepEquals;
