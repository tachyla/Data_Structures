const quicksort = require('../source/tdd_quicksort');

describe('quickSort tests', () => {
    it('returns array with length one', () => {
        let inputArray = [6];
        let result = quicksort(inputArray);

        let expectedResult = [6]; 

        expect(result).toEqual(expectedResult);
    });

    it('returns sorted array with length greater than one', () => {
        let inputArray = [12, 2, 10];
        let result = quicksort(inputArray);

        let expectedResult = [2, 10, 12];

        expect(result).toStrictEqual(expectedResult);
    });
});