function Calculator() {
  this.operations = {}
  this.addMethod = (op, func) => {
    this.operations[op] = func
  }

  this.calculate = (expression) => {
    let [left, op, right] = expression.split(" ")

    if (op && this.operations[op]) {
      return this.operations[op](left, right)
    } else {
      console.error("Operation `" + op + "` not defined");
    }
  }

  return this;
}

module.exports = Calculator;