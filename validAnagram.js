function validAnagram(a, b) {
  let freq1 = {}
  let freq2 = {}

  for (let val of a) {
    freq1[val] = (freq1[val] || 0) + 1
  }
  for (let val of b) {
    freq2[val] ? (freq2[val] += 1) : (freq2[val] = 1)
  }

  let freq1Arr = Object.entries(freq1).sort()
  let freq2Arr = Object.entries(freq2).sort()
  for (let i = 0; i < freq1Arr.length; i++) {
    if (freq1Arr.length !== freq2Arr.length) {
      return false
    }
    if (
      freq1Arr[i][0] !== freq2Arr[i][0] ||
      freq1Arr[i][1] !== freq2Arr[i][1]
    ) {
      return false
    }
  }
  return true
}
