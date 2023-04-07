//Write a function and retun a object with a common key value pair
const duplicateKeyVal = (a, b) => {
  let obj = {}
  for (let key in a) {
    if (key in b && a[key] === b[key]) {
      obj[key] = a[key]
    }
  }
  return obj
}
