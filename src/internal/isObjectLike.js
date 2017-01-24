const isObjectLike = (value) => (
  value &&
  value.constructor &&
  (value.constructor === Array || value.constructor === Object)
) ? true : false;

export default isObjectLike;
