const quickSort = require('../source/quicksort4');

describe('quicksort tests', () => {
    describe('Arrays of one', () => {
        it('returns array with length one', () => {
            const inputArray = [3];

            let result = quickSort(inputArray);

            expectedResult = [3];
            
            expect(result).toEqual(expectedResult);
        });
    });

    describe('Arrays of zero', () => {
        it('returns array with length zero', () => {
            const inputArray = [];

            let result = quickSort(inputArray);

            expectedResult = [];
            
            expect(result).toEqual(expectedResult);
        });
    });

    describe('Arrays of two', () => {
        it('can sort when the order is descending', () => {
            const inputArray = [4, 2];

            let result = quickSort(inputArray);

            expectedResult = [2, 4];
            
            expect(result).toEqual(expectedResult);
        });

        it('can sort when the order is ascending', () => {
            const inputArray = [1, 8];

            let result = quickSort(inputArray);

            expectedResult = [1, 8];
            
            expect(result).toEqual(expectedResult);
        });

        it('can sort when the array has the same number', () => {
            const inputArray = [8, 8];

            let result = quickSort(inputArray);

            expectedResult = [8, 8];
            
            expect(result).toEqual(expectedResult);
        });
    });

    it('returns sorted array with length greater than two', () => {
        const inputArray = [4, 6, 2];

        let result = quickSort(inputArray);

        expectedResult = [2, 4, 6];
        
        expect(result).toEqual(expectedResult);
    });
})