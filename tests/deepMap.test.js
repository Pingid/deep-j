import { expect, should } from 'chai';
import deepMap from '../src/deepMap'

const testData = [
  { one: null, two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepMap', () => {
  it('should iterate every value in deeply nested json', () => {
    let actual = [];
    const mapped = deepMap((value, key) => {
      actual.push(value);
      return value
    }, testData[0]);
    const expected = [
      null,
      "2",
      [ { four: "4", five: [ { six: "6" } ] } ],
      { four: "4", five: [ { six: "6" } ] },
      "4",
      [ { six: "6" } ],
      { six: "6" },
      "6",
    ];
    expect(actual).deep.equal(expected);
  });
  it('should modify every value in object', () => {
	  const expected = { one: 'test', two: 'test', three: 'test' };
	  const actual = deepMap(x => 'test', testData[0]);
	  expect(actual).deep.equal(expected);
  })
  it('should modify every value in array', () => {
	  const expected = ['test', 'test'];
	  const actual = deepMap(x => 'test', testData);
	  expect(actual).deep.equal(expected);
  })
  it('should modify deeply nested values', () => {
	  const expected = { one: null, two: '2', three: [{ four: '4', five: [{ six: 'test' }] }] };
	  const actual = deepMap(x => x === '6' ? 'test' : x, testData[0]);
	  expect(actual).deep.equal(expected);
  })
  it('If input is not an object should just return input', () => {
	  const expected = [null, undefined, {}, [], 1, '1'];
	  const actual = expected.map(x => deepMap(y => 'nothing', x));
	  expect(actual).deep.equal(expected);
  })
});
