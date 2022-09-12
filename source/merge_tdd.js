//breaks down arr until arr.len === 1
const mergeSort = (array) => {
    if(array.length === 1) return array;

    //logically inserts elements in numeric order
    const mergeHelper = (arrayA, arrayB) => {
        let resultArray = [];
        
        // while(i1 < arrayA.length && i2 < arrayB.length){
        //     //if arrayA[index1] is smallest; push  arrayA[index1]; increase index pointer
        //     if(arrayA[i1] < arrayB[i2]){
        //         resultArray.push(arrayA[i1]);
        //         i1++;
        //     }
        //     //otherwise push arrayB[index2]; increase pointer index
        //     else{
        //         resultArray.push(arrayB[i2]);
        //         i2++;
        //     }
        // }
        if(arrayA.length && arrayB.length){
            for(let indexA = 0; indexA < arrayA.length; indexA++){
                if(arrayA[indexA] < arrayB[indexB]){
                    resultArray.push(arrayA[indexA]);
                    indexA++;
                }
            }

            for(let indexB = 0; indexB < arrayB.length; indexB++){
                if(arrayA[indexA] > arrayB[indexB]){
                    resultArray.push(arrayB[indexB]);
                    indexB++;
                }
                else{ resultArray.push(arrayA[indexA]);
                indexA++
            };
            }
        }
        else if(indexA < arrayA.length){
            resultArray.push(arrayA[indexA]);
            indexA++;
        }

        else{}
        
        return resultArray;
    }
    
    //recursively break down array length that is not 1
    while(array.length > 1){
        let middle = Math.floor(array.length / 2);
        let right = array.slice(middle);  
        let left = array.slice(0, middle);

        //call mergeHelper on each array portion 
        return mergeHelper(mergeSort(left), mergeSort(right));
    }

    
    
        
}; 

module.exports = mergeSort;