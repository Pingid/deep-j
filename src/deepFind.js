import curry from './curry';
import deepMap from './deepMap';

// deepFind :: (a -> b -> c -> c)
const deepFind = curry((func, json) => {
  let result = null;
  deepMap((value, key) => {
    if (result) return null;
    else if (func(value, key)) { result = value; }
    return value;
  }, json);
  return result;
});

export default deepFind;
