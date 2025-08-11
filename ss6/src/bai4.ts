interface Geometry{

    calculateArea(): number;
    calculatedPerimeter(): number;
}

class Circle implements Geometry{

    private radius: number;

    constructor(radius: number){
        this.radius = radius
    }

    calculateArea(): number {
        return Math.PI * this.radius
    }

    calculatedPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Retangle4 implements Geometry{

    private width: number;
    private height: number;

    constructor(width: number,height: number){
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height
    }
    calculatedPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(5);
const retangle4 = new Retangle4(5,7);

console.log(`chu vi Circle : ${circle.calculatedPerimeter().toFixed(2)}`);
console.log(`dien tich Circle : ${circle.calculateArea().toFixed(2)}`);

console.log(`chu vi Retangle4 : ${retangle4.calculatedPerimeter().toFixed(2)}`);
console.log(`dien tich Retangle4 : ${retangle4.calculateArea().toFixed(2)}`);