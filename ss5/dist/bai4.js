"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    get getYear() {
        return this.year;
    }
    get getCompany() {
        return this.company;
    }
}
const car = new Vehicle(`S450`, `2025`, `Mercedes`, 1);
console.log(`Id : ${car.id}`);
console.log(`Name : ${car.name}`);
console.log(`Year : ${car.getYear}`);
console.log(`Company : ${car.getCompany}`);
