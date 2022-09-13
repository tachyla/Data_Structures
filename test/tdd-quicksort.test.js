const quicksort = require('../source/tdd_quicksort');

describe('quickSort tests', () => {
    it('returns array with length one', () => {
        let inputArray = [6];
        let result = quicksort(inputArray);

        let expectedResult = [6]; 

        expect(result).toEqual(expectedResult);
    });

    it('returns sorted array with length zero', () => {
        let inputArray = [];
        let result = quicksort(inputArray);

        let expectedResult = [];

        expect(result).toStrictEqual(expectedResult);
    });

    it('returns sorted array with length greater than 1', () => {
        let inputArray = [4, 2];
        
        let result = quicksort(inputArray);

        let expectedResult = [2, 4];

        expect(result).toEqual(expectedResult);

    });

    it('returns sorted array with sorted array & length greater than 1', () => {
        let inputArray = [2, 4];
        
        let result = quicksort(inputArray);

        let expectedResult = [2, 4];

        expect(result).toEqual(expectedResult);
    })
});