const fibonacci = function(term) {
  if (term < 0) return 'OOPS'
  if (term == 0) return 0;

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= term; i++) {
    let currentFib = prev1 + prev2;
    prev1 = prev2;
    prev2 = currentFib;
  }
  return prev2
};

// Do not edit below this line
module.exports = fibonacci;
