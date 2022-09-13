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

    it('returns sorted array with length greater than one', () => {
        let inputArray = [4, 2];
        
        let result = quicksort(inputArray);

        let expectedResult = [2, 4];

        expect(result).toEqual(expectedResult);

    });

    it('returns sorted array with sorted array & length greater than one', () => {
        let inputArray = [2, 4];
        
        let result = quicksort(inputArray);

        let expectedResult = [2, 4];

        expect(result).toEqual(expectedResult);
    });

    it('returns sorted array when input array contains duplicates', () => {
        const inputArray = [2, 2];

        let result = quicksort(inputArray);

        const expectedResult = [2, 2];

        expect(result).toEqual(expectedResult);

    });

    it('sorts array with length greater than two', () => {
        const inputArray = [5, 3, 3];

        let result = quicksort(inputArray);
        
        const expectedResult = [3, 3, 5];

        expect(result).toEqual(expectedResult);
    });


});