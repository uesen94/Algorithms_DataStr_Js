//selection sort: worst-case time complexity of O(n^2), 
//it is not efficient for large arrays but can be used for small arrays.

function selectionSort(arr) {
    var sortedArray=[];
    while(arr.length>0){
        var indexToMove=indexOfMin(arr);
        sortedArray.push(arr.splice(indexToMove,1)[0]); 
    }
    return sortedArray;
}

function indexOfMin(arr) {
    var min_index=0;
    for (let i = 0; i < arr.length; i++) {  
        if(arr[i]<arr[min_index])     
        min_index = i;       
    }
    return min_index;
}

//testing values
const numbers=[29, 100, 1, 2, 57, 28, 88, 3, 50, 67, 37, 1, 32, 20];
const sorted=selectionSort(numbers);
console.log(sorted);
