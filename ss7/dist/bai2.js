"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        console.log(`slowDown: -10`);
        this.speed -= 10;
    }
    speedUp() {
        console.log(`speedUp: +10`);
        this.speed += 10;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const myBicycle = new Bicycle("Xe đạp", 20, 1, 2);
myBicycle.showSpeed();
myBicycle.speedUp();
myBicycle.showSpeed();
myBicycle.slowDown();
myBicycle.showSpeed();
