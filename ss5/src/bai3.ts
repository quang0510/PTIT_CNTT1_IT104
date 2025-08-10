class Employee{

    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string,company: string,phone: string){

        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printfInfo = (): void => {

        console.log(`Name : ${this.name}`);
        console.log(`Company : ${this.company}`);
        console.log(`Phone : ${this.phone}`);
    }
}
const user = new Employee("Quang","PTIT","0987654321");

user.printfInfo();