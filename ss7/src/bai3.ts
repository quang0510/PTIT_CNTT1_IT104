abstract class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract makeNoise(): void;
    abstract printName(): void;

}

class Cat extends Animal{

    makeNoise(): void {
        console.log(` meo meo`);
        
    }

    printName(): void {
        console.log(`CAT`);
        
    }
}

class Dog extends Animal{

    makeNoise(): void {
        console.log(` gau gau`);
        
    }

    printName(): void {
        console.log(` DOG`);
        
    }
}

const cat3 = new Cat ("quang");
const dog3 = new Dog ("quang");

cat3.makeNoise();
dog3.makeNoise();

