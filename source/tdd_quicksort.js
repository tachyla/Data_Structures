const quickSort = (array) => {
    if(array.length === 1) return array;

    if(array.length > 1){

        let pivotIndex = 0;
        
        pivotFunction(pivotIndex);
        
        return array;
    }
    
    else return array;
    
    
    //pick pivotIndex & compare other values to it
    function pivotFunction(pivotIndex) {
        for (let i = pivotIndex + 1; i < array.length; i++) {

            if (array[pivotIndex] > array[i]) {
                swapFunction(pivotIndex, i);
            }
        }
    }

    function swapFunction(pivotIndex, i) {
        let temp = array[pivotIndex];
        array[pivotIndex] = array[i];
        array[i] = temp;
    }
}







module.exports = quickSort;