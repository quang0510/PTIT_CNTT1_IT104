abstract class User {
  getName(): void {
    console.log("Nguyễn Văn A");
  }

  abstract run(): void;

  abstract study(): void;
}

class Employee extends User {
  run(): void {
    throw new Error("Method not implemented.");
  }
  study(): void {
    throw new Error("Method not implemented.");
  }
}

// interface Animal {
//   name: string;

//   makeSound(): void;
// }

// class Dog implements Animal {
//   name: string;

//   constructor(name: string) {
//     // name = Kiki
//     this.name = name;
//   }

//   makeSound(): void {
//     throw new Error("Method not implemented.");
//   }
// }

// const dog = new Dog("Kiki");