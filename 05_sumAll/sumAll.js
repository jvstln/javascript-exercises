const sumAll = function(start, end) {
  if (!isAPositiveInteger(start) || !isAPositiveInteger(end)) {
    return 'ERROR';
  } 

  let sum = 0;
  let upperBoundary = Math.max(start, end);
  let lowerBoundary = Math.min(start, end);

  for (let i = lowerBoundary; i <= upperBoundary; i++) {
    sum += i;
  }
  return sum;
};

const isAPositiveInteger = (number) => {
  return number > 0 && Math.floor(number) === number;
}

// Do not edit below this line
module.exports = sumAll;
