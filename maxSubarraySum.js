// Sliding window method 
// Give an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of suarray with the length of the number passed to this function 
 //m
function maxSubarraySum (arr,n){

    let currSum = 0
    let maxSum = 0 
    //Creating a window for given n element  
    for(let i = 0; i<n; i++){
        currSum +=arr[i]
    }
    // shifting the window by one and updating the maxsum as per the current sum 
    for(let j = 0; j<arr.length-n+1; j++){
        maxSum = Math.max(currSum, maxSum)
        currSum = currSum - arr[j] + arr[j+2]
    }
    
    return maxSum
}
let x =  maxSubarraySum([1,2,3,4,5,8,3,15,11,3,15],2) 
x