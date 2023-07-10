//depends on divide and conquer(böl ve yönet)
//complexity:O(logn), worst case O(log n^2)
//selection of pivot element is crucial for effeciency
 //it will be roughly the radian of an array.

 function quickSort(numbers) {
    if(numbers.length <=1){
        return numbers;
    }

     const pivotIndex= Math.floor(numbers.length/2);
     const pivot= numbers[pivotIndex];
     const left= [];
     const right= [];
     

     for (let i=0; i<numbers.length; i++){
         if(i === pivotIndex){
             continue;
         }
         
         if(numbers[i] < pivot){
             left.push(numbers[i]);
         }
           
         else{
             //console.log(numbers[i]);
             right.push(numbers[i]); 
         }
             
     }
     
     const sortedLeft=quickSort(left);
     const sortedRight=quickSort(right);

     //console.log(sortedLeft,pivot,sortedRight);

     //return [ ...sortedLeft, pivot, ...sortedRight];
     //or
     return sortedLeft.concat(pivot,sortedRight);
 }




 //testing
 var testedValues=[3,5,1,2,4];
 var sorted=quickSort(testedValues);
 console.log(sorted);
