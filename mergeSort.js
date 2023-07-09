// sort a list in ascending order
// returns a new sorted list
// divide:find the midpoint of the list and divide into sublists
// conquer: recursively sort the sublists created in prev step
// combine: merge the sorted sublists created in previous step
// Time Complexity: O(n log n) time

function mergeSort(arr) {

    if(arr.length<=1){
        return arr;
    }
    

 // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);


 // Recursively sort the two halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

// Merge the sorted halves
  return merge(sortedLeft, sortedRight);
    
}

function merge(leftArr,rightArr) {
    let mergedArray=[];
    let leftIndex=0;
    let rightIndex=0;

    while( leftIndex<leftArr.length && rightIndex<rightArr.length ){
        if( leftArr[leftIndex]<=rightArr[rightIndex]){
            mergedArray.push(leftArr[leftIndex]);
            leftIndex++;
        }else{
            mergedArray.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    //add remaining left elements(if any)
    while(leftIndex<leftArr.length){
        mergedArray.push(leftArr[leftIndex]);
        leftIndex++;
    }

    //add remaining right elements(if any)
     while(rightIndex<rightArr.length){
        mergedArray.push(rightArr[rightIndex]);
        rightIndex++;
    }
    return mergedArray;
}


//verification the output
function verifySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false; // If any element is smaller than its previous element, sorting is incorrect
    }
  }
  return true; // All elements are in sorted order
}

//testing
const exampleList= [5,0,-2,1,39,49];
const sortedExampleList=mergeSort(exampleList);
console.log(sortedExampleList);

const isSorted=verifySorted(sortedExampleList);
console.log("Sorting is correct:", isSorted);
