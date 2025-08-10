"use strict";
class Employee {
    constructor(name, company, phone) {
        this.printfInfo = () => {
            console.log(`Name : ${this.name}`);
            console.log(`Company : ${this.company}`);
            console.log(`Phone : ${this.phone}`);
        };
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
}
const user = new Employee("Quang", "PTIT", "0987654321");
user.printfInfo();
