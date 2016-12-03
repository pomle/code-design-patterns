const infOff = require('./impl');

describe('Infinite Offset', () => {
  [
    [5, 3, 7, 1],
    [5, -6, 7, 6],
    [3, 4, 7, 0],
    [10, 4, 10, 4],
    [10, -4, 10, 6],
    [10, -14, 10, 6],
    [9, 3, 12, 0],
    [4, 1, 5, 0],
    [4, 25, 5, 4],
    [13, 1241245, 14, 4],
  ].forEach(([input, diff, max, expected]) => {
    describe(`when called with input ${input}, diff ${diff}, max ${max}`, () => {
      it(`result is ${expected}`, () => {
        const result = infOff(input, diff, max);
        if (result !== expected) {
          throw new Error(`Expected ${result} to be ${expected}`);
        }
      });
    });
  });
});
