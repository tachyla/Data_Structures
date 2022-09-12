const mergeSort = require('../source/merge_tdd')

describe('merge sort', () => {
    // it('returns true', () => {
    //     expect(true).toEqual(true)
    // })


    // it('divides array into two arrays', () => {
    //     let result = mergeSort([1, 2, 3]);

    //     expect(result).toStrictEqual([[1], [2, 3]]);
    // });

    // it('divides array in half when length > 3', () => {
    //     let result = mergeSort([9, 4, 1, 7]);

    //     expect(result).toStrictEqual([[9, 4], [1, 7]]);
    // });

    it('returns array if length is one', () => {

        let result = mergeSort([7]);

        expect(result).toStrictEqual([7]);
    });

    it('orders array elements', () => {

        let result = mergeSort([8, 5]);

        expect(result).toStrictEqual([5, 8]);
    });

    it('returns sorted array', () => {

        let result = mergeSort([5, 8]);

        expect(result).toStrictEqual([5, 8]);
    });

    it('returns sorted array containing duplicate values', () => {
        let result = mergeSort([7, 7]);

        expect(result).toStrictEqual([7,7]);
    });

    it('returns sorted array containing more than 2 values', () => {
        let result = mergeSort([7, 7, 3]);

        expect(result).toStrictEqual([3, 7, 7]); 
    });

    it('returns sorted array containing more than 3 values', () =>{
        let result = mergeSort([5, 7, 3, 4]);

        expect(result).toStrictEqual([3, 4, 5, 7]);
    });

    it('returns sorted array containing duplicates & >3 values', () =>{
        let result = mergeSort([7, 5, 7, 3, 4]);

        expect(result).toStrictEqual([3, 4, 5, 7, 7]);
    });

    it('returns sorted array when dataset is large', () => {
        let result = mergeSort([
            60, 87, 19, 16, 53, 22, 13, 40, 27, 51,
            71, 5, 7, 3, 4, 18, 2, 1, 6, 4,
            16, 20, 90, 87, 9, 76, 35, 14, 0, 12 
        ]);

        let expectedResult = [
            0, 1, 2, 3, 4, 4, 5, 6, 7, 9, 
            12, 13, 14, 16, 16, 18, 19, 20, 22, 27, 
            35, 40, 51, 53, 60, 71, 76, 87, 87, 90
        ];

        expect(result).toStrictEqual(expectedResult);
    });

});