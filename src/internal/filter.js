import curry from '../curry';
import objectType from './objectType';

const objectFilter = curry((func, object) => {
  let newObj = {};
  for (let key in object) {
    if (func(object[key], key, object)) {
      newObj = Object.assign({}, newObj, { [key]: object[key] })
    }
  }
  return newObj;
});

const arrayFilter = curry((func, array) => {
  let newArr = [];
  for (let index = 0; index < array.length; index++) {
    if (func(array[index], index, array)) {
      newArr = [].concat(newArr, [array[index]]);
    }
  }
  return newArr;
});

const filter = curry((func, object) => {
  return objectType(objectFilter(func), arrayFilter(func), object);
})

export default filter;
