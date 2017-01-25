import curry from './curry';
import deepMap from './deepMap';

import isObjectLike from './internal/isObjectLike';
import filter from './internal/filter';

/*
  Passes every value of JSON literal to the passed in filter function
  only keeping the values which the filter function returns true on
*/
// deepFilter :: (a -> Boolean) -> b -> b
const deepFilter = curry((f, json) =>
  deepMap(value => isObjectLike(value) ? filter(f, value) : value, filter(f, json)));

export default deepFilter;
