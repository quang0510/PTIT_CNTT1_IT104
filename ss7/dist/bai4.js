"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Ten sinh vien: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(` ten giao vien: ${this.name}`);
        console.log(` mon hoc: ${this.subject}`);
    }
}
const student = new Student("quang", 1);
const teacher = new Teacher("quang", "IT");
student.displayInfo();
teacher.displayInfo();
