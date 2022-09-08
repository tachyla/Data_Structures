const mergeSort = (array) => {
    if(array.length === 1) return array;

    while(array.length > 1){
        let middle = Math.floor(array.length / 2);

        let array1 = array.slice(0, middle);
        let array2 = array.slice(middle);

        return ([mergeSort(array1), mergeSort(array2)]);
    }
}; 

module.exports = mergeSort;