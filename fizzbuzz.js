function fizzBuzz(number) {
    switch (true) {
      case (number % 15 === 0): 
        return 'FizzBuzz';
      case (number % 3 === 0):
        return 'Fizz';
      case (number % 5 === 0):
        return 'Buzz';
      default:
        return number;
    }
  }
  
  module.exports = fizzBuzz;
  