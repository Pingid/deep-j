import curry from './curry';
import reduce from './internal/reduce';
import isObjectLike from './internal/isObjectLike';
import deepEquals from './deepEquals';
import deepMap from './deepMap';

/*
  Passes every value of JSON literal to the passed in filter function
  only keeping the values which the filter function returns true on
*/
// deepReduce :: (j -> Bool) -> j -> j
const deepReduce = curry((func, init, value) => {
	let result = init;
	const iteration = deepMap((value, key) => {
		result = func(result, value, key);
		return value;
	}, value)
  return result;
});

export default deepReduce;
