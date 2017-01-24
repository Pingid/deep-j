import { expect } from 'chai';
// import deepSelect from '../src/deepSelect';
import select from '../src/internal/select';

describe('deepSelect', () => {
	console.log(select(x => x === 'x', [1, 2, 3, 'x']));
})
