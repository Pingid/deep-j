import curry from './curry';
import compose from './compose';

import map from './internal/map';

/*
  Recursive function which takes a function and nested json and iterates over
  the json mapping over every value
*/

// map :: (a -> )
const deepMap = curry((func, json) => {
  return map((value, key) => {
    if (typeof value === 'object') return deepMap(func, func(value, key));
    return func(value, key)
  }, json)
})

export default deepMap;
