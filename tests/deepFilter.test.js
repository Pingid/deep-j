import _ from 'ramda';
import { expect, should } from 'chai';
import deepFilter from '../src/deepFilter'

const testData = [
  { one: '1', two: '2', three: [{ four: '4', five: [{ six: '6' }, { seven: '7' }] }, ] },
  { one: 1, two: 2, three: [{ four: 4, five: [{ six: 6 }, { seven: '7' }] }] }
];

const data = {
  todoList: [
    {  text: 'Exercise',
      sublist: [
        { text: '5k run' },
        { text: '30min stretch' }
      ]
    },
    { text: 'Trim nose hairs' }
  ]
}

describe('deepFilter', () => {
  it('deepFilter should iterate over every value', () => {
    let actual = [];
    const filtered = deepFilter((x) => { actual.push(x); return x !== "6"; }, testData[0]);
    const filtered2 = deepFilter((x) => { actual.push(x); return !_.isEmpty(x); }, filtered);
    const expected = [
      { one: '1', two:'2', three:[ { four:'4', five:[ { six:'6' } ] } ] },
      '1',
      '2',
      [ { four:'4', five:[ { six:'6' } ] } ],
      { four:'4', five:[ { six:'6' } ] },
      '4',
      [{ six:'6' }],
      { six:'6' },
      '6',
    ]
    // console.log('filtered', filtered);
    // console.log(JSON.stringify(filtered2, null, 2));
    // expect(actual).deep.equal(expected);
  });
  // it('should not remove empty objects and arrays even if they are items in an array', () => {
  //   const actual = deepFilter((x) => x !== 100, { two: [{}] });
  //   const expected = { two: [{}] };
  //   expect(actual).deep.equal(expected);
  // })
  // it('should not remove empty objects or arrays if they are values in an object', () => {
  //   const actual = deepFilter((x) => x !== 100, { one: {}, two: [] });
  //   const expected = { one: {}, two: [] };
  //   expect(actual).deep.equal(expected);
  // })
  // it('Shoule throw Error if inproper arguments are give', () => {
  //   const throwsMadArgumenterror = () => deepFilter(testData, {})
  //   expect(throwsMadArgumenterror).to.throw('filter expected (Function) instead received (Array)')
  // })
});
