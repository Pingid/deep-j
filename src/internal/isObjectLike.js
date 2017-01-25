const isObjectLike = value => (
  value &&
  value.constructor &&
  (value.constructor === Array || value.constructor === Object)
);

export default isObjectLike;
