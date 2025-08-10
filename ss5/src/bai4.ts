class Vehicle{

    public name: string;
    protected year: string;
    private company: string;
    readonly id: number;

    constructor(name: string,year: string,company: string,id: number){

        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    
    public get getYear(): string {
        return this.year;
    }

    public get getCompany(): string {
        return this.company;
    }
    
}

const car = new Vehicle(`S450`,`2025`,`Mercedes`,1);

console.log(`Id : ${car.id}`);
console.log(`Name : ${car.name}`);
console.log(`Year : ${car.getYear}`);
console.log(`Company : ${car.getCompany}`);