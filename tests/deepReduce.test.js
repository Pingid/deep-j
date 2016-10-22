import { expect, should } from 'chai';
import deepReduce from '../src/deepReduce.js'

const testData = [
  { one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepReduce', () => {
  it('deepReduce should reduce every value', () => {
    const actual = deepReduce((a, b) => a + b, '', testData)
    const expected = '12461246'
    expect(actual).equal(expected);
  })
  it('should merge all key value pairs', () => {
    const actual = deepReduce((a, b, c) => {
      return typeof b === 'object' ? a.concat(b) : a.concat([{ [c]: b }])
    }, [], testData)
    const expected = [{ one: '1'}, { two: '2'}, { four: '4'}, { six: '6'}, { one: 1}, { two: 2}, { four: 4}, { six: 6}];
    expect(actual).deep.equal(expected)
  })
});
