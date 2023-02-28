function plusMinus(x) {
  let positive = 0
  let zero = 0
  let negetive = 0
  for (let i of x) {
    if (i < 0) {
      negetive++
    } else if (i === 0) {
      zero++
    } else if (i > 0) {
      positive++
    }
  }
  console.log(
    (positive / x.length).toFixed(5),
    (negetive / x.length).toFixed(5),
    (zero / x.length).toFixed(5)
  )
}

let x = plusMinus([-4, 3, -9, 0, 4, 1])
x
