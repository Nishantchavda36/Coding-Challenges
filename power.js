// Write function in a recursive way so it returns the power of his base
// example 
//power(2,0) => 1
//power(2,2) => 4



function power(base, expo){
  if(expo === 0) return 1;
  if(expo === 1) return base
  if(expo > 1) return base*power(base,expo-1)
}

let x = power(3,3)
x