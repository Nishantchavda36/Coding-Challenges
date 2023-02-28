 let validParantesis = (input) => {
   let obj = {
     '(': ')',
     '{': '}',
     '[': ']'
   }
   
   let counter = []
   let splitString = input.split('')
   for(let val of splitString){
      if(obj.hasOwnProperty(val)){
        counter.push(val); 
      }
      else{
        let closingBrkt = counter.pop()
        if(val !== obj[closingBrkt]){
          return false
        }
      }
     }
  return counter.length === 0 ;   
 }

 let xyz = validParantesis('{{}}');
 xyz