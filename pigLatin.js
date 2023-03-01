//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched
//Examples
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !


//My Approach

function pigIt(str){
  
  let strArr = str.split(" ");
  let finalStr = [];
  
  strArr.map((a) => {
    punRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g
    if(a.search(punRegex) !== -1){
      let pun = a[a.search(punRegex)];
      finalStr.push(pun); 
      }
    else{
      let pgStr = ""
      let firstChar = a.charAt(0);
      let remainigChar = a.substring(1);
      pgStr += `${remainigChar}${firstChar}ay`;
      finalStr.push(pgStr);
    }   
  })
return finalStr.join(' ');

}
