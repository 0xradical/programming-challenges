function getMaxSubSum(list) {
  let maxSum = 0
  let sum = 0
  let j = -1

  for(let i = 0; i < list.length; i++) {
    let number = list[i];

    if (j == -1) {
      if (number >= 0) {
        j = i
        sum = number
      }
    } else {
      if (sum + number > 0) {
        sum = sum + number
      } else {
        sum = 0
        j = -1
      }
    }

    if (sum > maxSum) {
      maxSum = sum
    }
  }

  return maxSum
}

module.exports = getMaxSubSum