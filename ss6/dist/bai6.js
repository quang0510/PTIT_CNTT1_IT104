"use strict";
class Student {
    constructor(id, name) {
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.setId = (newId) => this.id = newId;
        this.setName = (newName) => this.name = newName;
        this.id = id;
        this.name = name;
    }
}
class Classroom {
    constructor(students) {
        this.addStudent = (newStudent) => {
            this.students.push(newStudent);
            console.log(`Them hoc sinh thanh cong`);
        };
        this.showStudents = () => {
            this.students.forEach((element, index) => {
                console.log(`ID : ${element.getId()}`);
                console.log(`Name : ${element.getName()}`);
            });
        };
        this.filterStudent = (id) => {
            return this.students.find(ele => ele.getId() === id);
        };
        this.addStudentInClass = (arrayStudents, count) => {
            if (!arrayStudents) {
                return;
            }
            for (let i = 0; i < count && arrayStudents.length > 0; i++) {
                const student = arrayStudents.shift();
                if (student) {
                    this.addStudent(student);
                }
            }
        };
        this.students = students;
    }
}
const arrayStudents = [
    new Student(1, `Nguyen Van A`),
    new Student(2, `Nguyen Van B`),
    new Student(3, `Nguyen Van C`),
    new Student(4, `Nguyen Van D`),
    new Student(5, `Nguyen Van E`),
    new Student(6, `Nguyen Van F`)
];
console.log(arrayStudents);
const classRoom1 = new Classroom([]);
const classRoom2 = new Classroom([]);
classRoom1.addStudentInClass(arrayStudents, 3);
classRoom2.addStudentInClass(arrayStudents, 3);
console.log(`Class Room 1 :`);
classRoom1.showStudents();
console.log(` Class Room 2 :`);
classRoom2.showStudents();
