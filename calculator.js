function operate(operation, a, b) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b === 0) {
          throw new Error('Cannot divide by zero');
        }
        return a / b;
      default:
        throw new Error('Invalid operation');
    }
}
  
module.exports = {
    add: (a, b) => operate('add', a, b),
    subtract: (a, b) => operate('subtract', a, b),
    multiply: (a, b) => operate('multiply', a, b),
    divide: (a, b) => operate('divide', a, b),
};
  