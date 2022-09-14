const quickSort = (array) => {
    if(array.length <= 1 ) return array;

    if(array.length > 1){

        let pivotIndex = 0;

            if(array[1] < array[pivotIndex]){
                let temp = array[pivotIndex];
                array[pivotIndex] = array[1];
                array[1] = temp;
            }
    }
    return array;
}

module.exports = quickSort;
