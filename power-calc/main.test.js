const Calculator = require("./main")

test("Calculator", () => {
  let calculator = new Calculator;

  calculator.addMethod("*", (a, b) => a * b);
  calculator.addMethod("/", (a, b) => a / b);
  calculator.addMethod("**", (a, b) => a ** b);

  expect(calculator.calculate("2 * 5")).toBe(10)
  expect(calculator.calculate("6 / 2")).toBe(3)
  expect(calculator.calculate("2 ** 3")).toBe(8)
})

