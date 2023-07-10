// Big O Notation : O(n)

function linearSearch(arr,key) {
        for(let i=0;i<=arr.length;i++){
            if(arr[i]===key){
                return i;
            }
        }
    return -1;
}

function nullCheck(result){
    if (result === -1) {
        console.log("The target is not found in the list.");
    } else {
        console.log("The target is found at index " + result + ".");
    }
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const key = 5;
const searchResult = linearSearch(arr, key);
nullCheck(searchResult);
