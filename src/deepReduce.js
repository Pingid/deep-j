import curry from './curry';
import reduce from './internal/reduce';

/*
  Passes every value of JSON literal to the passed in filter function
  only keeping the values which the filter function returns true on
*/
// deepReduce :: (j -> Bool) -> j -> j
const deepReduce = curry((func, init, value) => {
  return reduce((a, b, c) => {
  	if (typeof b === 'object') return func(a, deepReduce(func, init, b), c)
  	return func(a,b, c)
  }, init, value)
});

export default deepReduce;
