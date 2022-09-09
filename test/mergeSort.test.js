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
})