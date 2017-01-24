import curry from '../curry';
import objectType from './objectType';

const objectSelect = curry((f, o) => {
  for (let key in o) { if (f(o[key], key)) return o[key]; }
  return null;
})
const arraySelect = curry((f, a) => {
  for (let i = 0; i < a.length; i++) { if (f(a[i], i)) return a[i]; }
  return null
})

const select = curry((func, object) => {
  return objectType(objectSelect(func), arraySelect(func), object);
})

export default select;
