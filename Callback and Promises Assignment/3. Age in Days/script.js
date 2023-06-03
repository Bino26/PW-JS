let person = {
  firstName: "Bino",
  lastName: "Yann",
  age: 23,
};
let fullName, ageInDay;

function logResult(fullName, ageInDay) {
  return `The person's full name is ${fullName} and their age in days is ${ageInDay}`;
}

function ageInDays(person, logResult) {
  fullName = person.firstName + person.lastName;
  ageInDay = person.age * 365;

  console.log(person, logResult());
}

ageInDays(person, logResult);
