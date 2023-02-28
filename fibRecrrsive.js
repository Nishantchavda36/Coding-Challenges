function fibRecursive(num){
  
  if(num<=2) return 1
  return fibRecursive(num-1) + fibRecursive(num-2);

}

let x = fibRecursive(10)
x