//(calculateChange(1787, 2000)); //{ twoDollar: 1, dime: 1, penny: 3 }
//(calculateChange(2623, 4000)); //{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
//(calculateChange(501, 1000));  //{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

//Valid denominations are as follows:

//Twenty dollars
//Ten dollars
//Five dollars
//Two dollars
//One dollar
//Quarter (25¢)
//Dime (10¢)
//Nickel (5¢)
//Penny (1¢)


function calculateChange(total, cash){

  let remainingBal = cash-total;
  let change = {}

  while(remainingBal > 0 ){
  
        if(remainingBal >= 2000 ){
          change['twentyDollar'] = (change['twentyDollar'] || 0 )+1
          remainingBal -= 2000
        }

         if(remainingBal < 2000 && remainingBal >= 1000){
          change["tenDollar"] = (change["tenDollar"] || 0 )+1
          remainingBal -= 1000;
        }

          if(remainingBal < 1000 && remainingBal >= 5000){
          change["fiveDollar"] = (change["fiveDollar"] || 0 )+1
          remainingBal -= 500;
        }
 
         if(remainingBal < 500 && remainingBal >= 200 ){
          change["twoDollar"] = (change["twoDollar"] || 0 )+1
          remainingBal -= 200;
        }

         if(remainingBal <200 && remainingBal >= 100){
          change["oneDollar"] = (change["oneDollar"] || 0 )+1
          remainingBal -= 100;
        }

         if(remainingBal < 100 && remainingBal >= 25){
          change["quater"] = (change["quater"] || 0 )+1
          remainingBal -= 25;
        }

         if(remainingBal < 25 && remainingBal >= 10){
          change["dime"] = (change["dime"] || 0 )+1
          remainingBal -= 10
        }

        if(remainingBal < 10 && remainingBal>= 5){
          change['nickel'] = (change["nickel"] || 0 )+1
          remainingBal -= 5
         }
         
         if(remainingBal < 5 && remainingBal >= 1){
          change["penny"] = (change["penny"] || 0 )+1
          remainingBal -= 1
     }
     }
    return change;
  }


//Refined Approach

const calculateChange = function(total, cash) {
    // Your code here
    var rAmount = cash - total;
    var change = {}; 
        
    const moneyTypeAndValue = {
        'Twenty dollars' : 2000,
        'Ten dollars' : 1000,
        'Five dollars' : 500,
        'Two dollars' : 200,
        'One dollars' : 100,
        'Quarter' : 25,
        'Dime' : 10,
        'Nickel':5,
        'Penny':1

    }

        for (let key in moneyTypeAndValue){
            let amount = Math.floor(rAmount/moneyTypeAndValue[key]);
            if(amount > 0){
                change[key] = amount;
                rAmount %= moneyTypeAndValue[key];

            }
        }
    return change;
  };
  
