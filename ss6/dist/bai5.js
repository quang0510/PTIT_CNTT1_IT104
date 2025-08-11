"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        console.log(`Speed up : +10`);
        this.speed += 10;
        car.display();
    }
    slowDown() {
        console.log(`Slow down : -10`);
        this.speed -= 10;
        car.display();
    }
    stop() {
        this.speed = 0;
        car.display();
    }
    display() {
        console.log(`Toc do hien tai : ${this.speed}`);
    }
}
const car = new Vehicle(30);
car.display();
car.speedUp();
car.slowDown();
car.stop();
car.display();
