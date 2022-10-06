/* eslint-disable no-unused-vars */
// TASK 3
class Calculator {
  constructor(add, subtract, divide, multiply) {
    this.add = add;
    this.subtract = subtract;
    this.divide = divide;
    this.multiply = multiply;
  }

  static addFunction(y, z) {
    const sum = y + z;
  }

  static divideFunction(y, z) {
    const divide = y % z;
  }

  static subtractFunction(y, z) {
    const remainder = y - z;
  }

  static multiplyFunction(y, z) {
    const value = y * z;
  }
}

module.exports.Calculator = Calculator;