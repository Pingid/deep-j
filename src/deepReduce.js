import curry from './curry';
import reduce from './internal/reduce';
import isObjectLike from './internal/isObjectLike';

/*
  Passes every value of JSON literal to the passed in filter function
  only keeping the values which the filter function returns true on
*/
// deepReduce :: (j -> Bool) -> j -> j
const deepReduce = curry((func, init, value) => {
  return reduce((a, b, c) => {
    const result = func(a,b, c);
  	if (isObjectLike(b)) return func(a, deepReduce(func, init, b), c)
  	return result
  }, init, value)
});

export default deepReduce;
