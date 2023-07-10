//selection sort: worst-case time complexity of O(n^2), 
//it is not efficient for large arrays but can be used for small arrays.

function selectionSort(arr) {
    var sortedArray=[];

    //before displacement process
    //console.log(arr,sortedArray);
    
    while(arr.length>0){
        var indexToMove=indexOfMin(arr);
        sortedArray.push(arr.splice(indexToMove,1)[0]); //take min elements from arr to sortedArray with push method one by one.

        //after displacement process
        //console.log(arr,sortedArray);
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

//extra code to calculate the execution time.
console.time('timer1');
console.timeEnd('timer1'); // this prints times on the console
console.profile('profile1');
console.profileEnd('profile1');
