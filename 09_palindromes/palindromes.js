const palindromes = function (phrase) {
  const flatenedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, '');
  return flatenedPhrase === flatenedPhrase.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
