function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){
    if (left > right) {
        return -1;
     }

    let mid=Math.floor((left+right)/2);
    
    if (arr[mid] === target) {
        return mid;
     }else{
       if(arr[mid]<target){
           return recursiveBinarySearch(arr,target,mid+1,right);
       }else{
           return recursiveBinarySearch(arr,target,left,right-1);
       }
    }
}   

function nullCheck(result){
    if (result === -1) {
        console.log("The target is not found in the list.");
    } else {
        console.log("The target is found at index " + result + ".");
    }
}

const arr = [1, 2, 3, 4, 5, 6];
const target = 1;
const searchResult = recursiveBinarySearch(arr, target);
nullCheck(searchResult);

