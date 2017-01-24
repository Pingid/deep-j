import { expect } from 'chai';
import deepFind from '../src/deepFind';
import find from '../src/internal/find';

const testData = [
  { one: null, two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepFind', () => {
	it('should iterate every value in deeply nested json', () => {
    let actual = [];
    const mapped = deepFind(a => {
      actual.push(a);
      return false
    }, testData[0]);
    const expected = [
      null,
      "2",
      [ { four: "4", five: [ { six: "6" } ] } ],
      { four: "4", five: [ { six: "6" } ] },
      "4",
      [ { six: "6" } ],
      { six: "6" },
      "6"
    ];
    expect(actual).deep.equal(expected);
  });
	it('should only iterate values up too the point of selection', () => {
		let actual = [];
    const mapped = deepFind(a => {
      actual.push(a);
      return a && a.four
    }, testData[0]);
    const expected = [
      null,
      "2",
      [ { four: "4", five: [ { six: "6" } ] } ],
      { four: "4", five: [ { six: "6" } ] },
    ];
    expect(actual).deep.equal(expected);
	})
	it('should retrieve deeply nested value', () => {
		const expected = { six: '6' };
		const actual = deepFind(x => (x && x.six), testData[0]);
		expect(expected).deep.equal(actual);
	})
	it('should return null if no value return true', () => {
		const expected = null;
		const actual = deepFind(x => (x && x.seven), testData[0]);
		expect(expected).deep.equal(actual);
	})
})
