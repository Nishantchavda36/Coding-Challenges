//Given a number print out a multiplication table up to and including that number

// table(3) // [[1,2,3],[2,4,6],[3,6,9]]

// My approach
const table = (n) => {

// Create an array based on the n    
var arr = new Array(n);

for (var i = 0; i < arr.length; i++) {
  arr[i] = new Array(n);
}

//Assign the value of to the indexes            
    for(let i = 0 ; i<n; i++){
        for(let j = 0; j<n; j++){        
              arr[i][j] = ((i+1) *(j+1))  ; 
        }   
    }    
    return arr
}
table(3);
