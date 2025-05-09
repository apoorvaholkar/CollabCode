class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result = a / b;
    return this.result;
  }

  clear() {
    this.result = 0;
  }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(2, 7)); // 14
console.log(calc.divide(8, 2)); // 4
calc.clear();
console.log(calc.result); // 0