const mergeSort = (array) => {
    if(array.length === 1) {
        return array;
    }

    // split array at partition
    let middle = array.length / 2; // (2 / 2) = 1
    let partition1 = array.slice(0, middle); // [9] [3]
    let partition2 = array.slice(middle);

    let resultArray = [];

    //implement sorting logic
    if(partition1[0] < partition2[0]){
        resultArray.push(partition1[0]);
    }
    else{
        resultArray.push(partition2[0]);
        resultArray.push(partition1[0]);
    }

    return resultArray;
}

module.exports = mergeSort;