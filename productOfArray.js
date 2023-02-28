// Write function called productOArray which takes in an array of number and returns the prodcut of them all

function productOfArray(arr){
  let sum = 0
  if(arr.length === 0) return sum;
  if(arr.length === 1) return arr[0];
  if(arr.length > 1) return arr[0]* productOfArray(arr.slice(1))
}
let x = productOfArray([1,2,3,4])
x