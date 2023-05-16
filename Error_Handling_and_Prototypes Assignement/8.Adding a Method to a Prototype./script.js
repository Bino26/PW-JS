function Student(name) {
  this.name = name;
}

Student.prototype.printdetails = function () {
  return `Hello, the student is ${this.name}.`;
};

const student = new Student("Mithum");
console.log(student.printdetails());
