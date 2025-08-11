interface changeSpeed{

    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements changeSpeed{

    private speed: number;

    constructor(speed: number){
        this.speed = speed
    }

    speedUp(): void {
        console.log(`Speed up : +10`);
        this.speed += 10;
        car.display();
    }

    slowDown(): void {
        console.log(`Slow down : -10`);
        this.speed -= 10;
        car.display();
    }

    stop(): void {
        this.speed = 0;
        car.display();
    }

    display():void {
        console.log(`Toc do hien tai : ${this.speed}`);
        
    }
}

const car = new Vehicle(30);

car.display();
car.speedUp();
car.slowDown();
car.stop();
car.display()