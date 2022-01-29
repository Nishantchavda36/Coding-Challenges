// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the merged array of the two sorted arrays removing all the duplicates.


function findMedianSoretedArray (nums1, nums2){

  //Creating a object to track the elements
    let seen = {}
    let mergedArr = []
    for(let ele1 of nums1){
      seen[ele1] = true
    }
    for(let ele2 of nums2){
      seen[ele2] = true
    }
    for(let key in seen){
      mergedArr.push(key*1)
    }
     mergedArr.sort();
     return mergedArr
     
}

let x = findMedianSoretedArray([-1,2,4,5,9,6,],[1,4,3,5,5,6]);
x