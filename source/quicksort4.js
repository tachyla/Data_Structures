const swapFunction = (swapArray, pivotIndex, i) => {
    let temp = swapArray[pivotIndex];
    swapArray[pivotIndex] = swapArray[i];
    swapArray[i] = temp;
}

const quickSort = (array) => {
    if(array.length <= 1 ) return array;

    if(array.length > 1){

        let pivotIndex = 0;
        let left = pivotIndex;

        for(let right = pivotIndex + 1; right < array.length; right++){
            if(array[right] < array[pivotIndex]){
                left++; 
                swapFunction(array, pivotIndex, right);
            }
        }

        let arrayA = array.slice(0, pivotIndex + 1); 
        let arrayB = array.slice(pivotIndex + 1, array.length); 
        console.log(arrayA); // [2]  === left
        console.log(arrayB); // [6, 4] === right
        //left = 1

        quickSort(arrayA);  //quickSort(array, 0, pivotIndex);
        quickSort(arrayB); //quickSort(array, pivotIndex + 1, array.length)
        
    }
    return array;
}

module.exports = quickSort;
