const mergeSort = (array) => {
    if(array.length !== 1){
        //get middle
        let middle = Math.floor(array.length / 2);
        //return separated arrays
        let array1 = array.slice(0, middle);
        let array2 = array.slice(middle);

        return ([array1, array2]);
    }

    else{
        return array;
    }
}; 

module.exports = mergeSort;