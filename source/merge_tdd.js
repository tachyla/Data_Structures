const mergeSort = (array) => {
    if(array.length === 1) return array;

    let resultArray = [];
    let index1 = 0;
    let index2 = 1;

    if(array.length === 2){
        if(array[index1] > array[index2]){
            resultArray.push(array[index2]);
        }
    }
    resultArray.push(array[index1]);
    
    return resultArray;
}; 

module.exports = mergeSort;