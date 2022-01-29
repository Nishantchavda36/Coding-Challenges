// find the first recurring element
// Example
//[2,1,3,4,5,1,5]//1
//[1,2,3,5,4,5,6]//5

function firstRecurringEle(arr){
  let seen = {}
    for(let i = 0; i<arr.length; i++){
      let num =arr[i]
      if(num in seen){
        return num
      }
      seen[num] = i
    }
}


let x = firstRecurringEle([1,2,3,4,5,4,2])
x