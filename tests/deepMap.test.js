import { expect, should } from 'chai';
import deepMap from '../src/deepMap'
import map from '../src/internal/map'
import select from '../src/internal/select'
import deep from '../src/deep'

const testData = [
  { one: null, two: '2', three: [{ four: '4', five: [{ six: '6' }] }] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }] }] }
];

describe('deepMap', () => {
  const deepSelect = deep(select);
  const s = select(x => x === 2, { one: 1, two: 2 });
  const ds = deepSelect(x => x === 2, { one: 1, two: [{ one: 1, two: 2 }] })
  console.log(s);
  console.log(ds);

  it('deep map iterates every value in nest', () => {
    let actual = [];
    // const deepMap = deep(map);
    const mapped = deepMap((value, key) => {
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
});
