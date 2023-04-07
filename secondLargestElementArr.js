function secondLargestNumberArr(a) {
  let newArr = []
  a.sort((a, b) => {
    return a - b
  })
  a
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[i + 1]) {
      newArr.push(a[i])
    }
  }

  return newArr[newArr.length - 2]
}
