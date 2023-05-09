class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This a  ${this.year} ${this.company} ${this.year}`;
  }
}

const myCar = new Car("Skoda", "Rapid", 2022);
console.log(myCar.getDescription());

// Ouput : This a  2022 Skoda 2022
