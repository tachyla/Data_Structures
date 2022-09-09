const mergeSort = (array) => {
    if(array.length === 1) return array;

    let resultArray = [];
    let index1 = 0;
    let index2 = 1;
    
    if(array[index1] > array[index2]){
        resultArray.push(array[index2]);
        resultArray.push(array[index1]);
    } else {
        resultArray.push(array[index1]);
        resultArray.push(array[index2]);
    }

    return resultArray;
}; 

module.exports = mergeSort;