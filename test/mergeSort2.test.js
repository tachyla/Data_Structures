const mergeSort = require('../source/merge_2_tdd');


describe('mergeSort function', () =>{
    it('returns array when length is one', () => {
        let inputArray = [7];

        let result = mergeSort(inputArray);

        expect(result).toEqual([7]);
    });

    it('returns sorted array when unsorted array length is two', () => {
        let inputArray = [9, 3];
        let expectedResult = [3, 9];

        let result = mergeSort(inputArray);

        expect(result).toStrictEqual(expectedResult);
    });

    it('returns sorted array when unsorted array length is greater than one', () => {
        let inputArray = [3, 9];
        let expectedResult = [3, 9];

        let result = mergeSort(inputArray);

        expect(result).toEqual(expectedResult);
    });

});