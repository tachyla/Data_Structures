const mergeSort = (array) => {
    if(array.length === 1) return array;

    while(array.length > 1){
        let middle = Math.floor(array.length / 2);
        let right = array.slice(middle);  
        let left = array.slice(0, middle);

        const mergeHelper = (arrayA, arrayB) => {
            let resultArray = [];

            let i1 = 0;
            let i2 = 0;
            
            //if more than one array has length
            if(i1 < arrayA.length && i2 < arrayB.length){

                if(arrayA[i1] < arrayB[i2]){
                    resultArray.push(arrayA[i1]);
                    i1++;
                }

                if(arrayA[i1] > arrayB[i2]){
                    resultArray.push(arrayA[i1]);
                    i1++;
                }
                return resultArray;
            }

            //one array has length
            if(i1 < arrayA.length || i2 < arrayB.length){

                if(i1 < arrayA.length) {
                    for(i1 < arrayA.length; i1++;){
                        resultArray.push(arrayA[i1]);
                    }
                    return resultArray;
                }

                if(i2 < arrayB.length){
                    for(i2 < arrayB.length; i2++;){
                        resultArray.push(arrayB[i2]);
                    }
                    return resultArray;
                }
            }
            
            return resultArray;
        }

        //call mergeHelper on each array portion 
        return mergeHelper(mergeSort(left), mergeSort(right));
    }

    
    
        
}; 

module.exports = mergeSort;