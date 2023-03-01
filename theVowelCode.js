//DESCRIPTION:
//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

//a -> 1
//e -> 2
//i -> 3
//o -> 4
//u -> 5
//For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

//Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

//For example, decode("h3 th2r2") would return "hi there".

/For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
   let vowelRegex = /[aeiou]/gi
  
  if(string.match(vowelRegex) || string){
      return string.replace(vowelRegex, (x) => {
    if(x === "a"){
      return "1"
    }
    else if(x === "e"){
      return "2"
    }
    else if(x === "i"){
      return "3"
    }
    else if(x === "o"){
      return "4"
    }
    else if (x === "u"){
      return "5"
    }
    else{
      x;
    }
  })
  
  }
}

function decode(string) {
 let vowelNumber = /[12345]/gi
 if(string.match(vowelNumber) || string){
      return string.replace(vowelNumber, (x) => {
    if(x === "1"){
      return "a"
    }
    else if(x === "2"){
      return "e"
    }
    else if(x === "3"){
      return "i"
    }
    else if(x === "4"){
      return "o"
    }
    else if (x === "5"){
      return "u"
    }
    else {
      return x
    }
  })
   }
  
}
