import { expect, should } from 'chai';
import reduce from '../src/internal/reduce';

const testData = [
  { one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }, { seven: '7' }] }, ] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }, { seven: '7' }] }] }
];

// describe('Reduce', () => {
//   it('should not care about object type', () => {
//     const actual = reduce((a, b) => typeof b === 'object' ? a : a + b, '', testData[0])
//     const expected = '12';
//     expect(actual).equal(expected)
//   })
// })
