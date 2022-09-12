const quickSort = (array) => {
    if(array.length === 1) return array;

    let swapFunction = (array, index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    if(array.length > 1){
        let pivotIndex = 0;
        swapIndex = pivotIndex;

        for(let i = pivotIndex + 1; i < array.length; i++){
            if(array[i] > array[pivotIndex]){
                //swap indicies
                swap++;
                swap(array, swapIndex, i);
            }
        }
    }
    console.log(array);
    return array;
}

module.exports = quickSort;