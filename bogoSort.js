//Bogosort: shuffle the elements of array randomly and sort depend on it.
//this algorithm is highly inefficient when we increase the number of elements of an array.


//Second,defining logic 
function shuffle(arr){
    var shuffleIndex=arr.length;
    var temp,randomIndex;

    while(shuffleIndex !== 0){
        randomIndex=Math.floor(Math.random() * shuffleIndex);
        shuffleIndex -= 1;

        temp=arr[shuffleIndex];
        arr[shuffleIndex]=arr[randomIndex];
        arr[randomIndex]=temp;
    }
    return arr;  
}

//First, defining condition for the sorting completed.
function isSorted(arr) {
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i]){
            return false;
        }
    }
    return true;
}

//Third, check if bogoSort completed or not.
//Also, check the number of attempts to reach to the result.

function bogoSort(arr){
    var attempts=0;

    while(isSorted(arr) == false){
            console.log(attempts);
            arr=shuffle(arr);
            attempts+=1;
    }
    return arr;
}

//test values

var testingValues=[3,2,1,4,5];
var sortedArray=bogoSort(testingValues);

console.log(sortedArray);
