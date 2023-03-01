//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

//The overall run time complexity should be O(log (m+n)).

//Example 1:

//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Explanation: merged array = [1,2,3] and median is 2.

//Example 2:

//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 2.50000
//Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
 
 //My approach
 
 var findMedianSortedArrays = function(nums1, nums2) {
    let freq = {}
    let result = []
    for(let ele of nums1){
        freq[ele] ? freq[ele]++ : freq[ele]=1
    }
    for(let ele1 of nums2){
        freq[ele1] ? freq[ele1]++ : freq[ele1]=1
    }
    for(let key in freq){
        result.push(key*1);
    }
    
    result.sort();
   
    if(result.length%2 !== 0){
        let midpointForOdd = Math.floor(result.length/2) 
        return result[midpointForOdd];
    }else{
         let midPointForEven = Math.floor((result.length/2)-1) 
         let medianEven = ((result[midPointForEven] + result[midPointForEven-1]))/2
         return medianEven; 
}  
};
