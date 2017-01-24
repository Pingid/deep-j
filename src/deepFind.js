import curry from './curry';
import find from './internal/find';

// deepFind :: (a -> b -> c -> c)
const deepFind = curry((func, json) => {
  return select((value, key) => {
    const result = func(value, key);
    if (isObjectLike(value)) return deepFind(func, result);
    return result
  }, json)
})

export default deepFind;
