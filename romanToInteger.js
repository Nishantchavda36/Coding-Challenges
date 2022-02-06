let romanToInterger = (s) => {
  let romanObject = {
            I:1,
            IV:4,
            V:5,
            IX:9,
            X:10,
            XL:40,
            L:50,
            XC:90,
            C:100,
            CD:400,
            D:500,
            CM:900,
            M:1000
  }
  let result = 0
  let splitString = s.split('');

    for(let i = 0; i<splitString.length; i++){
    let char = splitString[i]
    let nextChar = splitString[i+1]
    
    //if current number is greater thean next element add into result 
    if(romanObject[char] > romanObject[nextChar]){
        result += romanObject[char]
    }
    //if current number is less than next element reduce from result
    else if(romanObject[char] < romanObject[nextChar]){
      result -= romanObject[char]
   }
    else{
     result += romanObject[char]
    }
  }
  
  return result

}

let x  = romanToInterger("MCMXCIV");
x