"use strict";
const student = {
    name: "quang",
    age: 20,
    email: `quang@gmail.com`
};
const hello = (student) => {
    return `Tên tôi là ${student.name}, tôi ${student.age} tuổi , email của tôi là ${student.email}.`;
};
console.log(hello(student));
