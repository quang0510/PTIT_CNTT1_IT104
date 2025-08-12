class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(): void {
        console.log(`slowDown: -10`);
        this.speed -= 10;
    }

    speedUp(): void {
        console.log(`speedUp: +10`);
        this.speed += 10;
    }

    showSpeed(): void {
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
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
