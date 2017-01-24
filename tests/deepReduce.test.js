import { expect, should } from 'chai';
import deepReduce from '../src/deepReduce.js'
import reduce from '../src/internal/reduce.js'

const testData = [
  { one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepReduce', () => {
  const l = deepReduce((a, b, c) => {
    // console.log('Value', b, 'KEY', c);
    return a + b;
  }, 0, { one: 1, two: 2, three: [ 1, 2 ] })
  const g = deepReduce((a, b, c) => {
    // console.log('Value', b, 'KEY', c);
    return a.concat([b]);
  }, [], { one: 1, two: 2, three: [ 1, 2 ] })
  // console.log('LLLLL',l);
  // console.log('GGGGG',g);
  it('deepReduce should reduce every value', () => {
    const actual = deepReduce((a, b) => {
      return a;
    }, '', testData)
    const expected = '12461246'
    // console.log(JSON.stringify(actual, null, 2));
    // console.log(typeof 'hello');
    expect(actual).equal(expected);
  })
  // it('should merge all key value pairs', () => {
  //   const actual = deepReduce((a, b, c) => {
  //     return typeof b === 'object' ? a.concat(b) : a.concat([{ [c]: b }])
  //   }, [], testData)
  //   const expected = [{ one: '1'}, { two: '2'}, { four: '4'}, { six: '6'}, { one: 1}, { two: 2}, { four: 4}, { six: 6}];
  //   expect(actual).deep.equal(expected)
  // })
});
