const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((sum, a) => sum + a, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, a) => product * a, 1);
};

const power = function(number, exp) {
	return number ** exp;
};

const factorial = function(number) {
  if (number === 0) return 1;

  let result = 1;
  for (let i = 2; i <= number; i++) result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
