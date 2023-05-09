class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee("Bino", "Chauffeur", "8000");
console.log(employee1.getSalary());

// Output : 8000
