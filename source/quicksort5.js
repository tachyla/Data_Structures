let array = [10, 16, 8, 12, 15, 6, 3, 9, 5];


//partition procedure: 
//increment lower counter until element is found greater than pivot
//decrement upper counter until Element is found smaller than pivot

//when both conditions are met; swap them  
//when upper becomes less than lower; counters have crossed each other...stop execution

//swap upper with pivot & pivot is landed in its sorted position
                                                    //- with elements to left of pivot smaller
                                                    //- with elements to right of pivot larger

//pivot/partition func accepts lower & higher 
//QuickSort(lower, j)
//QuickSort(j+ 1, higher)