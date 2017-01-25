/*
  Takes a function and returns a curried version of that function
*/
// curry: f -> f
const curry = (f) => function f1(...args1) { // eslint-disable-line arrow-parens
  if (args1.length >= f.length) return f(...args1);
  return function f2(...args2) { return f1(...args1.concat(args2)); };
};

export default curry;
