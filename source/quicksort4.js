const quickSort = (array) => {
    if(array.length <= 1 ) return array;

    if(array.length > 1){

        let pivotIndex = 0;
        let swapIndex = pivotIndex;

        const swapFunction = (array, pivotIndex, i) => {
            let temp = array[pivotIndex];
            array[pivotIndex] = array[i];
            array[i] = temp;
        }

        for(let i = pivotIndex + 1; i < array.length; i++){

            if(array[i] < array[pivotIndex]){
                swapIndex++; //[2, 6, 4]
                swapFunction(i, pivotIndex);
            }
        }
    }
    return array;
}

module.exports = quickSort;


// array[pivotIndex] = 4
// array[i] = 6

//  6<4 false
//  2 < 4 true >> increase swapIndex >> call swap()



//Current [2, 6, 4]
