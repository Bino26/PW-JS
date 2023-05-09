class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name : ${this.name} , Age :${this.age}`;
  }
}

const person1 = new Person("Mithum", 20);
console.log(person1.getDetails());

// Output : Name : Mithum , Age :20

const person2 = new Person();
console.log(person2.getDetails());

// Output : Name : Unknown , Age :0
