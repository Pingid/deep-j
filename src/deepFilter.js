import curry from './curry';
import deepMap from './deepMap';
import deepReduce from './deepReduce';

import filter from './internal/filter';

/*
  Passes every value of JSON literal to the passed in filter function
  only keeping the values which the filter function returns true on
*/
// deepFilter :: (j -> Bool) -> j -> j
const deepFilter = curry((f, json) => {
  return deepMap(value => typeof value === 'object' ? filter(f, value) : value,  filter(f, json))
})

// const deepFilter = curry((f, json) => {
//   return deepReduce((init, value, key) => {
//     if (!isNaN(parseInt(key))) {
//       return (init.constructor === Array ? init : []).concat(filter(f, value));
//     }
//     return Object.assign({}, init, { [key]: filter(f, value) })
//   }, {}, filter(f, json))
// })

export default deepFilter;
