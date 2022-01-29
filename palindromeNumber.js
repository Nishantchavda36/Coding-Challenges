// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.                                                                                     

// Solution with multiple pointer converting into the string

function isPlaindrom(num){
  let numStr = num + ""
  let left = 0
  let right = numStr.length-1
  while(left < right){
      if(numStr[left] !== numStr[right]){
          return false
      }
      left++
      right--
  }
  return true;

}

x = isPlaindrom(1220221)
x

// Solution using extra space i.e. array and converting into the string.

var isPalindrome2 = function(x) {
  let numStr = x+"";
   let forward = [];
   let backward = [];
       
   for(let i =0; i<numStr.length; i++){
         forward.push(numStr[i]);
         
   }
   for(let j = numStr.length-1; j>=0; j--){
       backward.push(numStr[j]);
       
   }
   for(let k = 0; k<numStr.length; k++){
      
       if(forward[k] !== backward[k]){
           return false;
       }
      
   } 
   
     return true;
   };

   // Solution using without converting number into the string.

   let isPalindrome3 = x => {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false
    
    let reversedX = 0;
    while (x > reversedX) {
        reversedX = reversedX * 10 + x % 10
        x = Math.floor(x/10)
    }
    
    if (x === reversedX || x === Math.floor(reversedX/10)) {
        return true
    } else {
        return false
    }
}
