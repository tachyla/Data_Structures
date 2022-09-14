const quickSort = require('../source/quicksort4');

describe('quicksort tests', () => {
    it('returns array with length one', () => {
        const inputArray = [3];

        let result = quickSort(inputArray);

        expectedResult = [3];
        
        expect(result).toEqual(expectedResult);
    });

    it('returns array with length zero', () => {
        const inputArray = [];

        let result = quickSort(inputArray);

        expectedResult = [];
        
        expect(result).toEqual(expectedResult);
    });

    it('returns sorted array with length greater than one', () => {
        const inputArray = [4, 2];

        let result = quickSort(inputArray);

        expectedResult = [2, 4];
        
        expect(result).toEqual(expectedResult);
    });
})