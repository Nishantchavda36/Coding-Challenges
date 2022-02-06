function fibbo(num){
  if (num === 0) return 0;
  if(num === 1) return 1
  if(num > 1) return num*fibbo(num-1);
}
let x = fibbo(10)
x