class Student{

    id: number;
    age: number;
    email: string;

    constructor(id: number,age: number,email: string){

        this.id = id;
        this.age = age;
        this.email = email;
    }   
}

const students: Student[] = []

const student1 = new Student(1,10,"quang1@gmail.com")
students.push(student1);

const student2 = new Student(2,20,"quang2@gmail.com")
students.push(student2);

const student3 = new Student(3,30,"quang3@gmail.com")
students.push(student3);

const student4 = new Student(4,40,"quang4@gmail.com")
students.push(student4);

const student5 = new Student(5,50,"quang5@gmail.com")
students.push(student5);

students.forEach(element => {

    console.log(`Id : ${element.id}`);
    console.log(`Age : ${element.age}`);
    console.log(`Email : ${element.email}`);
});


