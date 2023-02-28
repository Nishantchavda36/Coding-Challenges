// write a function called recursiveRange which accepts a numbers and adds up all the number from 0 to the number passed to function 

function recursiveRange(num){
  if(num === 0) return 0;
  if(num === 1) return 1;
  if(num > 1) return num + recursiveRange(num-1);
}

let x =recursiveRange(3)
x