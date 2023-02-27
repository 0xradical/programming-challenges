const getMaxSubSum = require("./main")

test('test getMaxSubSum', () => {
  expect(getMaxSubSum([-1])).toBe(0)
  expect(getMaxSubSum([1,2,3,-100,100,1])).toBe(101)
  expect(getMaxSubSum([-1, 2, 3, -9])).toBe(5)
  expect(getMaxSubSum([2, -1, 2, 3, -9])).toBe(6)
  expect(getMaxSubSum([-1, 2, 3, -9, 11])).toBe(11)
  expect(getMaxSubSum([-2, -1, 1, 2])).toBe(3)
  expect(getMaxSubSum([100, -9, 2, -3, 5])).toBe(100)
  expect(getMaxSubSum([1, 2, 3])).toBe(6)
})