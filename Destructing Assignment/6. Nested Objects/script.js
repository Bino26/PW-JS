const person = {
  names: "Mithum",
  age: 21,
  address: {
    street: "B8 , Block B Industrial Area .",
    city: "Sedot 62",
    state: " Uttar Pradesh",
    zip: "12345",
  },
};

const { names, street } = extractNameAndStreet(person);

console.log(names);
console.log(street);

function extractNameAndStreet(person) {
  const {
    names,
    address: { street },
  } = person;
  return { names, street };
}
