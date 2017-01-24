import { expect } from 'chai';
import deepEquals from '../src/deepEquals.js'

const testData = [
  { one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepEquals', () => {
	it('should work like === on non object types', () => {
		const values = [1, '1', null, undefined]
		const expected = [true, true, true, true];
		const actual = values.map(x => deepEquals(x, x));
		expect(actual).deep.equal(expected);
	})
	it('should return true on deep identacal deeply nested structures', () => {
		const expected = true;
		const actual = deepEquals(
			{ one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
			{ three: [{ four: '4', five: [{ six: '6' }] }], two: '2', one: '1' }
		)
		expect(actual).equal(expected);
	});
	it('should return false if deeply nested values are different', () => {
		const expected = false;
		const actual = deepEquals(
			{ one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
			{ three: [{ four: '4', five: [{ six: 'test' }] }], two: '2', one: '1' }
		)
		expect(actual).equal(expected);
	});

})
