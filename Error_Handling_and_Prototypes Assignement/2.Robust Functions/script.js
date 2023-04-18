function getPerson(obj) {
  try {
    if (obj && obj.name && obj.age) {
      return `Name : ${obj.name} , Age :${obj.age}`;
    } else {
      throw new Error("Invalid Parameter");
    }
  } catch (error) {
    return error.message;
  }
}

console.log(getPerson({ name: "Mithum", age: 20 })); //Name : Mithum , Age :20
console.log(getPerson({ name: "Mithum" })); //Invalid Parameter
