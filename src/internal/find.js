import curry from '../curry';
import objectType from './objectType';

const objectFind = curry((f, o) => {
  for (let key in o) { if (f(o[key], key)) return o[key]; }
  return null;
})
const arrayFind = curry((f, a) => {
  for (let i = 0; i < a.length; i++) { if (f(a[i], i)) return a[i]; }
  return null
})

const find = curry((func, object) => {
  return objectType(objectFind(func), arrayFind(func), object);
})

export default find;
