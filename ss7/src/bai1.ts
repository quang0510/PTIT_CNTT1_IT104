class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    getPhone(): string {
        return this.phone;
    }

    setPhone(newPhone: string): void {
        this.phone = newPhone;
    }

    printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.getPhone()}`);
    }
}

class Manager extends Employee {
    teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    printInfo(): void {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}

const manager = new Manager("quang", "ptit", "9876543210", 10);
manager.printInfo();
