import { expect, should } from 'chai';
import reduce from '../src/internal/reduce';

const testData = [
  { one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }, { seven: '7' }] }, ] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }, { seven: '7' }] }] }
];

describe('Reduce', () => {
	it('should iterate every value in object', () => {
		let actual = [];
		reduce((a, b) => {
			actual.push(b);
			return a;
		}, {}, testData[0])
		const expected = ['1', '2', [{ four: '4', five: [{ six: '6' }, { seven: '7' }] }, ]]
		expect(actual).deep.equal(expected);
	})
	it('should iterate every value in array', () => {
		let actual = [];
		reduce((a, b) => {
			actual.push(b);
			return a;
		}, {}, testData)
		const expected = testData;
		expect(actual).deep.equal(expected);
	})
  it('should not care about object type', () => {
    const actual = reduce((a, b) => typeof b === 'object' ? a : a + b, '', testData[0])
    const expected = '12';
    expect(actual).equal(expected)
  })
})
