const quicksort = require('../source/tdd_quicksort');

describe('quickSort tests', () => {
    it('returns array with length one', () => {
        let inputArray = [6];
        let result = quicksort(inputArray);

        let expectedResult = [6]; 

        expect(result).toEqual(expectedResult);
    });
});