const mergeSort = require('../source/merge_tdd')

describe('merge sort', () => {
    // it('returns true', () => {
    //     expect(true).toEqual(true)
    // })

    it('describes mergeSort function tests', () => {
        let result = mergeSort([1, 2, 3]);
    
        expect(result).toEqual([1, 2, 3]);
    });
})