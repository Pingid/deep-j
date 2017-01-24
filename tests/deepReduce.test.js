import { expect } from 'chai';
import deepReduce from '../src/deepReduce';

const testData = [
  { one: null, two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepReduce', () => {
	it('should iterate every value in deeply nested json', () => {
    let actual = [];
    const mapped = deepReduce((a, b) => {
      actual.push(b);
      return a
    }, 'initialValue', testData[0]);
    const expected = [
      null,
      "2",
      [ { four: "4", five: [ { six: "6" } ] } ],
      { four: "4", five: [ { six: "6" } ] },
      "4",
      [ { six: "6" } ],
      { six: "6" },
      "6",
			'initialValue',
			'initialValue',
			'initialValue',
			'initialValue',
    ];
    expect(actual).deep.equal(expected);
  });
})
