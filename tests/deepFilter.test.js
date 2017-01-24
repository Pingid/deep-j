import { expect } from 'chai';
import deepFilter from '../src/deepFilter'

const testData = [
  { one: null, two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepFilter', () => {
	it('should iterate every value in deeply nested json', () => {
     let actual = [];
     const filtered = deepFilter((value, key) => {
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
   it('should filter every value in object', () => {
 	  const expected = {};
 	  const actual = deepFilter(x => false, testData[0]);
 	  expect(actual).deep.equal(expected);
   })
   it('should filter every value in array', () => {
 	  const expected = [];
 	  const actual = deepFilter(x => false, testData);
 	  expect(actual).deep.equal(expected);
   })
   it('should modify deeply nested values', () => {
 	  const expected = { one: null, two: '2', three: [{ four: '4', five: [{}] }] };
 	  const actual = deepFilter(x => x !== '6', testData[0]);
 	  expect(actual).deep.equal(expected);
   })
   it('If input is not an object should just return input', () => {
 	  const expected = [null, undefined, {}, [], 1, '1'];
 	  const actual = expected.map(x => deepFilter(y => 'nothing', x));
 	  expect(actual).deep.equal(expected);
   })
});
