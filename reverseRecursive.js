// Write a recursive function called reverse which accept a string and returns a new string in reverse



//Solution 1
let reverse1 = (str) => {
  let result = reverseRecurs(str, '');
  return result;
}

let reverseRecurs = (str, result) => {
  if(str === '') return result;
  result = `${result}${str[str.length-1]}`;
  var newStr = str.slice(0, -1);
  return reverseRecurs(newStr, result);
}

 let y = reverse1('rithmschool');
 y



 //Solution 2
function reverse(str){

  let reversedString = ""
  
  if(str.length === 0) return reversedString
  if(str.length > 0){
    reversedString += reverse(str.substr(1))+str[0]
    reversedString
    str
  } 
  
  return reversedString
  }
let x = reverse('rithmschool')
x


//Solution 3

