import curry from './curry';

import isObjectLike from './internal/isObjectLike';
import map from './internal/map';

/*
  Recursive function which takes a function and nested json and iterates over
  the json mapping over every value
*/

// map :: (a -> b -> c -> c)
const deepMap = curry((func, json) =>
  map((value, key) => {
    const result = func(value, key);
    if (isObjectLike(value)) return deepMap(func, result);
    return result;
  }, json));

export default deepMap;
