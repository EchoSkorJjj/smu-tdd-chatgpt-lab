const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz Function', () => {
  test('should return "Fizz" for numbers divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test('should return "Buzz" for numbers divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  test('should return "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  test('should return the number for numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
  });
});
