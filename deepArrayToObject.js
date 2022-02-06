let convertArrayToObj = (arr) => {
  let result = {};
  convertRecurs(arr, result);
  return result;
}

let convertRecurs = (arr, res) => {
  for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i][1])) {
          res = Object.assign(res, {
              [arr[i][0]]: convertRecurs(arr[i][1], {})
          })
      } else {
          res = Object.assign(res, {
              [arr[i][0]]: arr[i][1] 
          })
      }
  }

  return res;
}




let x = convertArrayToObj([['a', 1], ['b', 2], ['c', [['d', ['e',4]]]]])
x