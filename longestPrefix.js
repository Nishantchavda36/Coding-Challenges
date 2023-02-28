// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function longestCommonPrefix(arr){
    let firstStr = arr[0].split('')
    let commonStr =[];
    let buildString = ''
    for(let i = 1; i<arr.length; i++){
          let nextStr = arr[i].split('')
          for(let j = 0; j<nextStr.length; j++){
              if(firstStr[j] !== nextStr[j]){
                  break;   
              }
              buildString += nextStr[j];
          }
          commonStr.push(buildString)
          buildString =''
          
       }
       commonStr.sort();
       return commonStr[0]
       
    }

let xyz = longestCommonPrefix(["cir","car"]);
xyz