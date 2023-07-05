// 1 . Given an array of integers and a target value, you must determine which two integers' sum
// equals the target and return a 2D array. Then merge the array into a single array with sorting (
// ascending ) order, in the next step double the target value and find again the combination of
// digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D
// array.
// Sample Input : [1, 3, 2, 2, -4, -6, -2, 8];
// Target Value = 4,
// Output: First Combination For “4” : [ [1,3],[2,2],[-4,8],[-6,2] ];
// Merge Into a single Array : [-6,-4,1,2,2,2,3,8];
// Second Combination For “8” : [ [ 1,3,2,2], [8,-4,2,2],....,[n,n,n,n] ]


var arr=[1, 3, 2, 2, -4, -6, -2, 8];
var Tvalue=4;
//For Output1: First Combination For “4” : [ [1,3],[2,2],[-4,8] ];

function FirstCombo(){
    arr = arr.sort((a, b) => a - b); //sort the array in ascending order
    let n=arr.length;
    let parent_Arr = [];  //an empty array to hold the child_arr of two values
    let Single_Arr = [];  //an empty array to merge the integers into ascending order
    let left = 0;
    let right = n - 1;
    while(left<right){ 
        let child_arr= []; //an empty array to hold the child_arr of two values
        let sum = arr[left] + arr[right]; 
        if(sum===Tvalue){
            child_arr.push(arr[left],arr[right]) // Add the pair of numbers to child array
            Single_Arr.push(arr[left],arr[right]) //Add the pair of numbers to Single Array
            right--;// Since we have collected the elements of this position, move the right pointer to the left
            left++;//And left pointer to the right
        }else if(sum>Tvalue){
                right-- //move the right pointer to the left,to reduce the sum
        }else{
            left++ //move the left pointer to the right,to increase the sum
        }
        if (child_arr.length != 0) {
            parent_Arr.push(child_arr); // Add the child_arr to the parent_Arr only if it contains any elements
          }

    }
   
      console.log("First Combination For 4 are :-",parent_Arr) // Output the 2d arrays of sub_arrays of two values whose sum is equal to 'Tvalue'
 
    return Single_Arr;
}




//For Output2: Merge Into a single Array : [-4,1,2,2,3,8];

function MergeAndSort(arr) {
    arr = arr.sort((a, b) => a - b); // Sort the Single_Arr in ascending order
    console.log("Merge Into a single Array:-",arr); // Output the merged and Single sorted array
  }
  var singleArr = FirstCombo(arr, Tvalue);
MergeAndSort(singleArr);