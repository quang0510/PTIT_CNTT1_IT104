interface Student {

    name:string,
    age:number,
    email:string
}

const student: Student = {

    name: "quang",
    age: 20,
    email: `quang@gmail.com`
}

const hello = (student: Student) => {
    return `Tên tôi là ${student.name}, tôi ${student.age} tuổi , email của tôi là ${student.email}.`
}


console.log(hello(student));