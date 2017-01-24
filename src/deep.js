import deepMap from './deepMap';
import curry from './curry';
import isObjectLike from './internal/isObjectLike';

const deep = curry((functor, func, json) => {
  console.log('deep', json);q22qqqqqqqt 
  return functor((value, key) => {
    const result = func(value, key);
    if (isObjectLike(value)) return deep(functor, func, result);
    return result
  }, json)
});

export default deep;
