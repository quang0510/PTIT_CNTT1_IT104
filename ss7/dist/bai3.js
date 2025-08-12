"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log(` meo meo`);
    }
    printName() {
        console.log(`CAT`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log(` gau gau`);
    }
    printName() {
        console.log(` DOG`);
    }
}
const cat3 = new Cat("quang");
const dog3 = new Dog("quang");
cat3.makeNoise();
dog3.makeNoise();
