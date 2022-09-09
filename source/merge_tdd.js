const mergeSort = (array) => {
    if(array.length === 1) return array;

    let resultArray = [];

    let i1 = 0;
    let i2 = 1;

    if(array.length >= 3){
        const mergeHelper = (arrayA, arrayB) => {
            //compare arrayA[arr1index] to arrayB[arr2index]
            let i1 = 0;
            let i2 = 0;

            //iterate over arrays
                                        //i2 becomes 2 and exits while loop
            while(i1 < arrayA.length && i2 < arrayB.length){
                if(arrayA[i1] < arrayB[i2]){
                    resultArray.push(arrayA[i1]);
                    i1++;
                }
                else{
                    resultArray.push(arrayB[i2]);
                    i2++;
                }
                console.log("ArrayA " + arrayA);
                console.log("ArrayB " + arrayB);
                console.log(resultArray);
                
            }

            while(i2 < arrayB.length){
                resultArray.push(i2);
                i++;
            }
            return resultArray;
        }

        //make array.len 2 or less
        let right = array.slice(2);  
        let left = array.slice(0, 2);
        mergeHelper(left, right);
    }

    if(array[i1] > array[i2]){
        resultArray.push(array[i2]);
        resultArray.push(array[i1]);
    } else {
        resultArray.push(array[i1]);
        resultArray.push(array[i2]);
    }
    return resultArray;
}; 

let myArray = [7, 5, 7, 3, 4];
console.log(mergeSort(myArray));

module.exports = mergeSort;