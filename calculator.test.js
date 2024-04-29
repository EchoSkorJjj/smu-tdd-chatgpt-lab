const calculator = require('./calculator');

describe('Calculator', () => {
  test('should correctly add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 2)).toBe(1);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(-1, -1)).toBe(-2);
  });

  test('should correctly subtract two numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(-1, 2)).toBe(-3);
    expect(calculator.subtract(0, 0)).toBe(0);
    expect(calculator.subtract(-1, -1)).toBe(0);
  });

  test('should correctly multiply two numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(-1, 2)).toBe(-2);
    expect(calculator.multiply(0, 0)).toBe(0);
    expect(calculator.multiply(-1, -1)).toBe(1);
  });

  test('should correctly divide two numbers', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
    expect(calculator.divide(-1, 2)).toBe(-0.5);
    expect(calculator.divide(0, 1)).toBe(0);
    expect(calculator.divide(-1, -1)).toBe(1);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
  });
});
