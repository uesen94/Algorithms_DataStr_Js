// better option compare to linearSearch if
    // data is sorted and  have a large collection with frequent search operations. 
// Big O Notation : O(log n)

function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }
        if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
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

const arr = [1, 2, 3, 4, 5,6];
const target = 6;
const searchResult = binarySearch(arr, target);
nullCheck(searchResult);

