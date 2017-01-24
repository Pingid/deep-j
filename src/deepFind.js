import curry from './curry';
import select from './internal/select';

// deepFind :: (a -> b -> c -> c)
const deepFind = curry((func, json) => {
  return select((value, key) => {
    const result = func(value, key);
    if (isObjectLike(value)) return deepFind(func, result);
    return result
  }, json)
})

export default deepFind;
