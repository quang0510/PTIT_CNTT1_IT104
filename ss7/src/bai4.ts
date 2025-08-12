abstract class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract displayInfo(): void;
}

class Student extends Person{

    id: number;

    constructor(name: string ,id: number){

        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`Ten sinh vien: ${this.name }`);
    }

}

class Teacher extends Person{
    subject: string;

    constructor(name: string , subject: string){

        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(` ten giao vien: ${this.name}`);
        console.log(` mon hoc: ${this.subject}`);
        
    }
}

const student = new Student("quang" , 1);
const teacher = new Teacher("quang", "IT");

student.displayInfo();
teacher.displayInfo();