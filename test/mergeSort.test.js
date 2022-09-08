const mergeSort = require('../source/merge_tdd')

describe('merge sort', () => {
    // it('returns true', () => {
    //     expect(true).toEqual(true)
    // })


    it('divides array into two arrays', () => {
        let result = mergeSort([1, 2, 3]);

        expect(result).toStrictEqual([[1], [2, 3]]);
    });

    it('divides array in half when length > 3', () => {
        let result = mergeSort([9, 4, 1, 7]);

        expect(result).toStrictEqual([[9, 4], [1, 7]]);
    });

    it('returns array if lenght is one', () => {
        
        let result = mergeSort([7]);

        expect(result).toStrictEqual([7]);

    });
})