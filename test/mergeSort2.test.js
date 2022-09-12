const mergeSort = require('../source/merge_2_tdd');


describe('mergeSort function', () =>{
    it('returns array when length is one', () => {
        let inputArray = [7];

        let result = mergeSort(inputArray);

        expect(result).toEqual([7]);
    });
})