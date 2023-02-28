const squareCode = (str) => {
let result = []
  let newStr = str.replace(/\s/g, "");
  let sq = Math.ceil(Math.sqrt(newStr.length))
  sq
  let buildNewArr = []

  for(let i = 0; i<newStr.length; i+=sq){
    i
    buildNewArr.push(newStr.substring(i, i+sq))
    buildNewArr
  }

  for(let j = 0; j<sq; j++){
    let buildString = ''
    for(let k = 0; k<buildNewArr.length; k++){
      if(buildNewArr[k][j]){
        buildString += buildNewArr[k][j]
      }  
    }
    buildString
    result.push(buildString)
  }

  
}
let xyz = squareCode("feed the dog" );
xyz;



//
function squareCode2(input){
let newInput = input.split(' ').join('');
let totalLength = Math.ceil(Math.sqrt(newInput.length))
let result = new Array(totalLength).fill('');

for(let i = 0; i < newInput.length; i += totalLength) {
    let splitString = newInput.substring(i, i+totalLength);
    for(let i = 0; i < totalLength; i++) {
        if(splitString[i]) result[i]+=splitString[i]
        
    }
    result
}
result
return  result.join(' ')
}

let yyz = squareCode2("feed the dog" );
yyz;
