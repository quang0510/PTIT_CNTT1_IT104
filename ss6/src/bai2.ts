abstract class Job {

  type: string;

  constructor(type: string) {
    this.type = type;
  }

  printType(): void {
    console.log("Loại công việc: ", this.type);
  }

  abstract calculateSalary(): number;
}

class PartimeJob extends Job {

  workingHour: number;

  constructor(type: string = "Part-time", workingHour: number) {
    super(type);
    this.workingHour = workingHour;
  }

  calculateSalary(): number {
    return 30000 * this.workingHour;
  }

}

class FulltimeJob extends Job {

  workingHour: number;

  constructor(type: string = "Fulltime", workingHour: number) {
    super(type);
    this.workingHour = workingHour;
  }

  calculateSalary(): number {
    return 10000000;
  }
}

const newPartimeJob = new PartimeJob("Part-time", 4);
const newFulltimeJob = new FulltimeJob("Fulltime", 8);

newPartimeJob.printType();
console.log(`Lương : ${newPartimeJob.calculateSalary()}`);

newFulltimeJob.printType();
console.log(`Lương : ${newFulltimeJob.calculateSalary()}`);
