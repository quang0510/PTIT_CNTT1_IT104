"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const car1 = new Vehicle("S450", 2025, "Mercedes");
const car2 = new Vehicle("VF3", 2025, "Vinfast");
console.log(`Car 1 : --------------`);
console.log(`Ten xe : ${car1.name}`);
console.log(`Nam san xuat : ${car1.year}`);
console.log(`Hang xe : ${car1.company}`);
console.log(`Car 2 : --------------`);
console.log(`Ten xe : ${car2.name}`);
console.log(`Nam san xuat : ${car2.year}`);
console.log(`Hang xe : ${car2.company}`);
