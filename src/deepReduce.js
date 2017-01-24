import curry from './curry';
import reduce from './internal/reduce';
import isObjectLike from './internal/isObjectLike';
import deepEquals from './deepEquals';

/*
  Passes every value of JSON literal to the passed in filter function
  only keeping the values which the filter function returns true on
*/
// deepReduce :: (j -> Bool) -> j -> j
const deepReduce = curry((func, init, value) => {
  return reduce((a, b, c) => {
    const result = func(a, b, c);
  	if (isObjectLike(b) && deepEquals(result, a)) return func(a, deepReduce(func, a, b), c)
  	return result
  }, init, value)
});

export default deepReduce;
