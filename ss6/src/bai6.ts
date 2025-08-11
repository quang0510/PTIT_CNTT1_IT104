class Student{

    private id: number;
    private name: string;

    constructor(id: number,name: string){
        this.id = id;
        this.name = name;
    }
    getId = () => {
        return this.id;
    }
    getName = () => {
        return this.name;
    }
    setId = (newId:number) => this.id = newId;

    setName = (newName:string) => this.name = newName;
}

class Classroom{

    students: Student[];

    constructor(students: Student[]){

        this.students = students;
    }

    addStudent = (newStudent:Student): void => {

        this.students.push(newStudent);
        console.log(`Them hoc sinh thanh cong`);
    }

    showStudents = (): void => {
        this.students.forEach((element,index) => {

            console.log(`ID : ${element.getId()}`);
            console.log(`Name : ${element.getName()}`);
        })
    }

    filterStudent = (id: number): Student|undefined => {
        return this.students.find(ele => ele.getId() === id);
    }

    addStudentInClass = (arrayStudents: Student[],count: number): void => {
        if(!arrayStudents){
            return;
        } 

        for (let i = 0; i < count && arrayStudents.length > 0; i++) {

            const student = arrayStudents.shift();

            if(student){
                 this.addStudent(student)
            }
        }
    }
}

const arrayStudents: Student[] = [

    new Student(1,`Nguyen Van A`),
    new Student(2,`Nguyen Van B`),
    new Student(3,`Nguyen Van C`),
    new Student(4,`Nguyen Van D`),
    new Student(5,`Nguyen Van E`),
    new Student(6,`Nguyen Van F`)

];
console.log(arrayStudents);

const classRoom1 = new Classroom([]);
const classRoom2 = new Classroom([]);

classRoom1.addStudentInClass(arrayStudents,3);
classRoom2.addStudentInClass(arrayStudents,3);

console.log(`Class Room 1 :`);
classRoom1.showStudents();

console.log(` Class Room 2 :`);
classRoom2.showStudents();