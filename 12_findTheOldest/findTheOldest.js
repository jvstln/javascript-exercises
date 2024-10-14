const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const age1 = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const age2 = (person.yearOfDeath || currentYear) - person.yearOfBirth;

    return age1 > age2 ? oldest : person;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
