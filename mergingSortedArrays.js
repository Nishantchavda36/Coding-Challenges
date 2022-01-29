// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the merged array of the two sorted arrays.

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function mergingSoretedArray (nums1, nums2){

    let i = 0 ;
    let j = 0;
    let k = 0;
    let result = []
    // Merging array 
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] <= nums2[j]){
          result[k] = nums1[i]
          i++
          k++
        
        }
        if(nums1[i] >= nums2[j]){
          result[k] = nums2[j]
          k++
          j++
        }
      }
      // Upper loop will exhaust if any of the arrays length is smaller and will assign the reamining array to result as the array is sorted
         while(i<nums1.length){
           result[k] = nums1[i]
            i++
            k++
          }
        while(j<nums2.length){
         result[k] = nums2[j]
         j++
         k++
        }
      
    if(result.length%2 !== 0){
      let midpointForOdd = Math.floor(result.length/2) 
      return result[midpointForOdd];
  }else{
       let midPointForEven = Math.floor((result.length/2)-1) 
       let medianEven = ((result[midPointForEven] + result[midPointForEven+1]))/2
       return medianEven; 
}  
}


let x = mergingSoretedArray([1,2],[3,4]);
x