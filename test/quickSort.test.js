const quickSort = require('../source/quickSort_tdd');

describe('quickSort function testing', () => {

   it('returns true', () => {
        expect(true).toEqual(true);
   }); 

   it('return array if length is one', () => {
        let result = quickSort([3]);

        expect(result).toEqual([3]);
   });
});