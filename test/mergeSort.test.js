const mergeSort = require('../source/merge_tdd')

describe('merge sort', () => {
    // it('returns true', () => {
    //     expect(true).toEqual(true)
    // })


    it('divides unsorted array into two arrays', () => {
        let result = mergeSort([1, 2, 3]);
        expect(result).toStrictEqual([[1], [2, 3]]);
    })
})