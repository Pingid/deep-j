import { expect, should } from 'chai';
import map from '../src/internal/map';

const testData = [
  { one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }, { seven: '7' }] }, ] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }, { seven: '7' }] }] }
];

// describe('Map', () => {
//   it('should not care about object type', () => {
//     const actual = map((x) => x, testData);
//     // expect(actual).equal(expected)
//   })
// })
